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
              <ProgressTag
                gaugeTop={53314}
                gaugeBottom={26067}
                name="jinbvcx"
              ></ProgressTag>
            </li>
            <li>
              <ProgressTag
                gaugeTop={2042157}
                gaugeBottom={8118}
                name="Banana"
              ></ProgressTag>
            </li>
            <li>
              <ProgressTag
                gaugeTop={2545270}
                gaugeBottom={6135}
                name="Samara"
              ></ProgressTag>
            </li>
            <li>
              <ProgressTag
                gaugeTop={696152}
                gaugeBottom={5510}
                name="talestalker"
              ></ProgressTag>
            </li>
            <li>
              <ProgressTag
                gaugeTop={47549}
                gaugeBottom={4393}
                name="BahbugandHum"
              ></ProgressTag>
            </li>
          </ul>
          <ul className={clsx(leaderboardCSS.tagListsRight)}>
            <li>
              <ProgressTag
                gaugeTop={20667}
                gaugeBottom={11545}
                name="Ritx"
              ></ProgressTag>
            </li>
            <li>
              <ProgressTag
                gaugeTop={32025}
                gaugeBottom={7681}
                name="Lammens Kristiaan"
              ></ProgressTag>
            </li>
            <li>
              <ProgressTag
                gaugeTop={75196}
                gaugeBottom={4393}
                name="qualitylover"
              ></ProgressTag>
            </li>
            <li>
              <ProgressTag
                gaugeTop={285998}
                gaugeBottom={4667}
                name="raze464"
              ></ProgressTag>
            </li>
            <li>
              <ProgressTag
                gaugeTop={8749}
                gaugeBottom={3769}
                name="Kuroneko45"
              ></ProgressTag>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
