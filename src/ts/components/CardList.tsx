import * as React from "react";
/**
 * コンポーネントのimport
 */
import {CardDetails} from "./CardDetails";
import {CardNone} from "./CardNone";

/**
 * 型のimport
 */
import {UserInfoType} from "../types/UserInfoType";
import {UserImgType} from "../types/UserImgType";
import {UserDetailsType} from "../types/UserDetailsType";

interface CardListProps{
    CardData: UserInfoType[];
    Animation: string;
}

interface CardListState{
    data: any;
}

export class CardList extends React.Component<CardListProps, CardListState>{
    constructor(props: CardListProps) {
        super(props);
        //Stateの初期化
        this.state = {data: []};
        //関数のバインド
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    // devideData(data: any){
    //     let devideData: any = [];
    //     for(let i = 0; i < data.length; i++){
    //         let forImg = {
    //             img: data.img,
    //             nickname: data.nickname,
    //             age: data.age,
    //             live: data.live
    //         };
    //         let forDetails = {
    //             work: data.work,
    //             height: data.height
    //         };
    //         devideData.push({
    //             img: forImg,
    //             details: forDetails
    //         });
    //     }
    //     this.setState({data: devideData});

    // }
    // componentDidMount(){
    //     //this.devideData(this.props.CardData);
    // }
    render(){
        //配列のコピー
        var users = this.props.CardData.concat().reverse();
        var nodes = users.map((userInfo, index) => {
            console.log(index);
            // 2枚目がundefinedならば何も返さない
            if(userInfo === undefined && index === 0){
                return (
                    <CardNone />
                );
            // 1枚目、2枚目ともundefinedならば内容のHTMLを表示する
            } else if (userInfo === undefined && index === 1){
                return (
                    <CardNone />
                );
            }
            //下のレイヤー
            if(index === 0){
                return (
                    <CardDetails Index={index} key={userInfo.id} userData={userInfo} Animation={''} />
                );
            } else {
                return (
                    <CardDetails Index={index} key={userInfo.id} userData={userInfo} Animation={this.props.Animation} />
                );
            }
        });
        return(
            <div className="CardList">
                {nodes}
            </div>
        );
    }
};
