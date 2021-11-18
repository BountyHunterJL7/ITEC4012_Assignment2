import "./styles.css";
import {HomeComp1} from "../../../components/home-comp1/index";
import {HomeComp2} from "../../../components/home-comp2/index";
import {HomepageBreak} from "../../../components/homepage-break/index";
import comp1 from "../../../rightnow.json";
import comp2 from "../../../comp2.json";
import homepageBreakblue from "../../../homepageBreakBlue.json";
import homepageBreakYellow from "../../../homepageBreakYellow.json";

export const HomePage = () => {
    return (
        <div>
            <div className="home-heading">
                <div className="home-title">
                    <h1>Right now at IKEA</h1>
                </div>
            </div>
            <div className="home-comp-card-wrapper">
                { 
                    comp1.map(post => {
                        return(
                            <HomeComp1 key={post.id} image={post.image} name={post.name} desc={post.desc} color={post.color} id={post.id}></HomeComp1>
                        )}) 

                   
                } 

            </div>

            <div>
                { 
                    homepageBreakblue.map(post => {
                        return(
                            <HomepageBreak key={post.id} name={post.name} desc={post.desc} button={post.button} colorId={post.colorId} id={post.id}></HomepageBreak>
                        )}) 

                   
                } 

            </div>

            <div className="home-heading">
                <div className="home-title">
                    <h1>Shop products for a more sustainable home</h1>
                </div>
            </div>
            <div className="home-comp-card-wrapper">
                { 
                    comp2.map(post => {
                        return(
                            <HomeComp2 key={post.id} image={post.image} name={post.name} id={post.id}></HomeComp2>
                        )}) 

                   
                } 

            </div>

            <div >
                { 
                    homepageBreakYellow.map(post => {
                        return(
                            <HomepageBreak key={post.id} name={post.name} desc={post.desc} button={post.button} colorId={post.colorId} id={post.id}></HomepageBreak>
                        )}) 

                   
                } 

            </div>
        </div>
    );
    
}