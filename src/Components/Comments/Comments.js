import "./Comments.scss";
// import CommentsAvatar from "../../assets/Images/Mohan-muruge.jpg";
import CommentsAsset from "../../assets/Icons/add_comment.svg";

const Comments = (props) => {
  const videoContent = props.videoContent;

  return (
    <section className="comments">
      <p className="comments__number">3 Comments</p>
      <h2 className="comments__header">JOIN THE CONVERSATION</h2>
      <div className="comments__wrap">
        <img
          className="comments__image"
          // src={CommentsAvatar}
          // alt="BrainFlix Avatar"
        />
        <form className="comments__form">
          <textarea
            name="comments"
            className="comments__id"
            placeholder="Add a new comment"
          ></textarea>
          <button type="submit" className="comments__button">
            <img
              className="comments__button--icon"
              src={CommentsAsset}
              alt="comments button icon"
            ></img>
            <p className="comments__button--text">COMMENT</p>
          </button>
        </form>
      </div>
      {videoContent.comments.map((info) => (
        <article key={info.id} className="comments__display">
          <div className="comments__placeholder--container">
            <div className="comments__placeholder" />
          </div>
          <div className="comments__main--container">
            <div className="comments__authordate--container">
              <p className="comments__author">{info.name}</p>
              <p className="comments__date">
                {new Date(info.timestamp).toLocaleDateString("en-US", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "numeric",
                })}
              </p>
            </div>
            <p className="comments__text">{info.comment}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Comments;
