import { reviews } from "@/lib/constants";
import { IconStarFilled } from "@tabler/icons-react";
import styles from "./Reviews.module.css";

export default function Reviews() {
    return (
        <section aria-labelledby="review-heading" className={styles.reviewsWrapper}>
            <div className={`content ${styles.reviewsContent}`}>
                <h2 id="review-heading" className="h2">Straight from the <span className="brand">chair.</span></h2>
                <p className="p2">Don&apos;t take our word for it.</p>
                <div className={styles.reviewsGrid}>
                    {reviews.map((review) => (
                        <blockquote className={styles.reviewsGridItem} key={review.author}>
                            <div role="img" className={styles.reviewsRating} aria-label="5 out of 5 stars">
                                {[1, 2, 3, 4, 5].map((x) => (
                                    <IconStarFilled key={x} className={styles.reviewsRatingIcon} size={15} aria-hidden="true"/>
                                ))}
                            </div>
                            <p className={`p2 ${styles.reviewQuote}`}><em>{review.quote}</em></p>
                            <cite className={`h4 accent ${styles.reviewsAuthor}`}>{review.author}, {review.location}</cite>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    )
}
