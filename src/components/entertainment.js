import React, { Component } from "react"
import Newscard from "./card";
import Title from "./title";

export default class Entertainment extends Component {
    render() {
        const Url =  "https://inshorts.me/news/topics/entertainment";
        return (
            <div className="container pt-5">
                <Title titleName={"Entertainment  News"} />
                <Newscard Url={Url} />
            </div>
        )
    }
}
