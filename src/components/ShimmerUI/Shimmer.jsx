import './Shimmer.css';

export const Shimmer = () => (
    <div className="shimmer-container">
        {[...Array(24)].map((_, index) => (
            <div key={index} className="shimmer-item"></div>
        ))}
    </div>
);