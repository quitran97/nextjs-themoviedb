import clsx from "clsx";
import leaderboardCSS from "./leaderboard.module.css";
import ProgressTag from "./ProgressTag";

const Leaderboard = () => {
  return (
    <section className="maxWidth1300 marginB10">
      <div className={clsx(leaderboardCSS.leaderboardWrapper)}>
        <div className={clsx(leaderboardCSS.leaderboardHeader)}>
          <h2
            className={clsx(leaderboardCSS.leaderboardHeading) + " fontWeight6"}
          >
            Leaderboard
          </h2>
          <ul className={clsx(leaderboardCSS.leaderboardNote)}>
            <li>
              <span
                className={clsx(
                  leaderboardCSS.dotCustom,
                  leaderboardCSS.backgroundLinearGreen
                )}
              ></span>
              All Time Edits
            </li>
            <li>
              <span
                className={clsx(
                  leaderboardCSS.dotCustom,
                  leaderboardCSS.backgroundOrangeRed
                )}
              ></span>
              Edits This Week
            </li>
          </ul>
        </div>
        <div className={clsx(leaderboardCSS.leaderboardContent)}>
          <ul className={clsx(leaderboardCSS.tagListsLeft)}>
            <li>
              <ProgressTag gaugeTop={681352} gaugeBottom={8026}></ProgressTag>
            </li>
            <li>
              <ProgressTag gaugeTop={8306} gaugeBottom={7216}></ProgressTag>
            </li>
            <li>
              <ProgressTag gaugeTop={33427} gaugeBottom={6151}></ProgressTag>
            </li>
            <li>
              <ProgressTag gaugeTop={257277} gaugeBottom={4110}></ProgressTag>
            </li>
            <li>
              <ProgressTag></ProgressTag>
            </li>
          </ul>
          <ul className={clsx(leaderboardCSS.tagListsRight)}>
            <li>
              <ProgressTag></ProgressTag>
            </li>
            <li>
              <ProgressTag></ProgressTag>
            </li>
            <li>
              <ProgressTag></ProgressTag>
            </li>
            <li>
              <ProgressTag></ProgressTag>
            </li>
            <li>
              <ProgressTag></ProgressTag>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
