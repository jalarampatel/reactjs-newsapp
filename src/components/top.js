import React, { Component } from "react"
import Newscard from "./card";
import Title from "./title";

export default class Top extends Component {
    render() {
        const Url = " https://inshorts.me/news/top?offset=0&limit=21";
        return (
            <div className="container pt-5">
                <Title titleName={"Top News"} />
                <Newscard Url={Url} />
            </div>
        )
    }
}
