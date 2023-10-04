import React, { Component } from "react"
import Newscard from "./card";
import Title from "./title";

export default class Science extends Component {
    render() {
        const Url = "https://inshorts.me/news/topics/science";
        return (
            <div className="container pt-5">
                <Title titleName={"Science News"} />
                <Newscard Url={Url} />
            </div>
        )
    }
}
