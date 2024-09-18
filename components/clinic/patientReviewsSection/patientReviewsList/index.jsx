import ButtonComponent from "@/globalElements/Button";
import PatientReviewsListItem from "./patientReviewsListItem";

export default function PatientReviewsList({ reviews }) {
  return (
    <div className="flex-1 flex flex-col items-center ">
      {reviews.map((review, index) => {
        return <PatientReviewsListItem review={review} />;
      })}
      <ButtonComponent className="!py-[15px] !px-[60px] mt-3 w-[228px] !rounded-[34px] bg-primary">
        <p className="pr-2.5 text-white">See More </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
            fill="#292D32"
          />
          <path
            d="M16.19 11.7499H17.3971L16.5436 10.8963L13.5336 7.88635C13.4388 7.79161 13.4388 7.62819 13.5336 7.53346C13.6283 7.43872 13.7917 7.43872 13.8864 7.53346L18.1764 11.8235C18.2237 11.8708 18.25 11.934 18.25 11.9999C18.25 12.0658 18.2237 12.129 18.1764 12.1763L13.8864 16.4663C13.8352 16.5176 13.7745 16.5399 13.71 16.5399C13.6455 16.5399 13.5848 16.5176 13.5336 16.4663C13.4388 16.3716 13.4388 16.2082 13.5336 16.1135L16.5436 13.1035L17.3971 12.2499H16.19H6C5.86614 12.2499 5.75 12.1338 5.75 11.9999C5.75 11.866 5.86614 11.7499 6 11.7499H16.19Z"
            fill="#292D32"
            stroke="white"
          />
        </svg>
      </ButtonComponent>
    </div>
  );
}
