import TotalBalanceBox from "./TotalBalanceBox";

const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  return (
    <div className="header-text-c">
      <h1 className="">
        {title}
        {type === "greeting" && (
          <span className="text-bankGradient2">&nbsp;{user}</span>
        )}
      </h1>
      <p className="header-box-subtext">{subtext}</p>
    </div>
  );
};

export default HeaderBox;
