import React from "react";
import Card from "../city/Card";
import LargeCard from "../city/LargeCard";

class Home extends React.Component {
  render() {
    const { cities } = this.props;

    // console.log("cities dans home", cities);
    // console.log("cities of london dans home", cities[4]);

    return (
      <div>
        {cities.map((elem) => {
          return (
            <Card
            name={elem[0].name}
                slug={elem[0].slug}
                source={elem[0].source}/>
            // ( 
            //   <Card
            //     name={elem.name}
            //     slug={elem.slug}
            //     source={elem.source}
            //   ></Card>
            // ),
            // (
            //   <LargeCard
            //     name={elem.name}
            //     slug={elem.slug}
            //     source={elem.source}
            //   ></LargeCard>
            // )
          );
        })}
        )
      </div>
    );
  }
}

export default Home;
