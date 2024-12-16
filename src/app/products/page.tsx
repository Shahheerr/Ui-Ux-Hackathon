import { AllProducts } from "@/components/All-Product-Page";
import { NewsletterSubscription } from "@/components/NewsletterSubscription";

export default function ProductsPage() {
    return (
        <div className="overflow-x-hidden">
            <AllProducts />
            <NewsletterSubscription />
        </div>
    );
}