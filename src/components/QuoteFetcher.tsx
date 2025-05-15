import { useEffect } from "react";

type Quote = {
  quotes: string;
  author: string;
};

type QuoteFetcherProps = {
  onQuoteLoaded: (quote: Quote) => void;
};

export default function QuoteFetcher({ onQuoteLoaded }: QuoteFetcherProps) {
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("https://test001-2425.vercel.app/api/quotes");
        if (!response.ok) throw new Error("Failed to fetch quotes");
        const data: Quote[] = await response.json();

        if (data && data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          const randomQuote = data[randomIndex];
          onQuoteLoaded(randomQuote);
        }
      } catch (error) {
        console.error("Error fetching quotes:", error);
        onQuoteLoaded({
          quotes: "Failed to load quotes.",
          author: "",
        });
      }
    };

    fetchQuotes();
  }, [onQuoteLoaded]);

  return null; // no UI, logic only
}
