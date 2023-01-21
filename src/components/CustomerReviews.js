import React from "react";
import Data from "./Data";

const CustomerReviews = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    setUsers(Data);
  }, []);

  return (
    <div className="customer-reviews">
      {users.map((user) => {
        return (
          <div className="customer-reviews__review" key={user.user}>
            <div className="customer-reviews__review__customer">
              <img src={user.imgSrc} alt="" />

              <div>
                <h4>{user.user}</h4>
                <p>{user.isVerified ? "Verified Buyer" : "Unverified"}</p>
              </div>
            </div>

            <p className="review">{user.review}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CustomerReviews;
