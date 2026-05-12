import style from "./CardStatus.module.css";
export default function CardStatus({ counter, title, solid }) {
  return (
    <>
      <div className={`${style.card} d-flex align-items-center `}>
        <div
          className={`${style.icon}  d-flex align-items-center justify-content-center w-100`}
        >
          <i className={`fa-solid fa-${solid}`}></i>
        </div>
        <div
          className={`${style.info} d-flex flex-column align-items-center justify-content-center w-100 `}
        >
          <span className={`${style.counter}`}>{counter}</span>
          <span className={`${style.title}`}>{title}</span>
        </div>
      </div>
    </>
  );
}
