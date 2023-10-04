import React, { Component } from "react"
import Newscard from "./card";
import Title from "./title";

export default class sports extends Component {
    render() {
        const Url = "https://inshorts.me/news/topics/sports";
        return (
            <div className="container pt-5">
                <Title titleName={"Sports News"} />
                <Newscard Url={Url} />
            </div>
        )
    }
}

