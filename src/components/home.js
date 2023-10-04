import React, { Component } from "react"
import Newscard from "./card";
import Title from "./title";

export default class Home extends Component {
    render() {
        const Url = "https://inshorts.me/news/all?offset=0&limit=99";
        return (
            <div className="container pt-5">
                <Title titleName={"All News"} />
                <Newscard Url={Url} />
            </div>
        )
    }
}
