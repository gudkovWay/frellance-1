"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { IoMdStar } from "react-icons/io";

interface Review {
  id: number;
  username: string;
  avatar: string;
  rating: number;
  content: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    username: "Alice Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    content: "Excellent product! Exceeded my expectations in every way.",
    date: "2023-05-15",
  },
  {
    id: 2,
    username: "Bob Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    content: "Great value for money. Would definitely recommend.",
    date: "2023-05-10",
  },
  {
    id: 3,
    username: "Carol Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    content: "Decent product, but there's room for improvement.",
    date: "2023-05-05",
  },
  {
    id: 4,
    username: "David Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    content: "Absolutely love it! Best purchase I've made this year.",
    date: "2023-05-01",
  },
  {
    id: 5,
    username: "Emma Thompson",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    content: "The product is okay, but I expected more features.",
    date: "2023-04-28",
  },
  {
    id: 6,
    username: "Franklin Lee",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    content: "Not satisfied with the quality. It broke after a week.",
    date: "2023-04-25",
  },
  {
    id: 7,
    username: "Grace Kim",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    content: "Good overall experience, but shipping took longer than expected.",
    date: "2023-04-20",
  },
  {
    id: 8,
    username: "Henry Garcia",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    content: "Fantastic! This product has changed my life for the better.",
    date: "2023-04-15",
  },
];

export const Reviews = () => {
  const ref = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [count, setCount] = useState(0);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setShowAnimation(true);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  useEffect(() => {
    if (showAnimation) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          const newCount = prevCount + 50000;
          return newCount >= 1000000 ? 1000000 : newCount;
        });
      }, 70);

      return () => clearInterval(interval);
    }
  }, [showAnimation]);

  return (
    <div className="container mx-auto px-4 py-8 relative mt-24" id="reviews">
      <h2 className="text-2xl font-bold mb-6">Наши отзывы</h2>
      <div className="grid gap-6 lg:grid-cols-2" ref={ref}>
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-zinc-800 rounded-2xl shadow-md p-6 relative z-10"
          >
            <div className="flex items-center mb-4">
              <div>
                <h3 className="font-semibold">{review.username}</h3>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <IoMdStar
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-2">{review.content}</p>
            <p className="text-sm text-gray-500">Posted on {review.date}</p>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {showAnimation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center bg-zinc-900 rounded-xl bg-opacity-50 z-20"
          >
            <div className="text-center text-white">
              <motion.h3
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-6xl font-bold mb-2"
              >
                <span className="sr-only">
                  Всего за время работы скопили больше:
                </span>
                <br />
                {count.toLocaleString()}
                <span aria-hidden="true">+</span>
                <br />
                <span aria-hidden="true">Отзывов</span>
              </motion.h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
