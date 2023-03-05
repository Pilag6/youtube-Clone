import React from "react";
import "./RecommendedVideo.css";
import ShortsCard from "./ShortsCard";
import VideoCard from "./VideoCard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const RecommendedVideo = () => {
    return (
        <div className="recommendedVideo">
            <div className="recommendedVideo__carousel">
                <p>All</p>
                <p>JavaScript</p>
                <p>Live</p>
                <p>Lessons</p>
                <p>UI design</p>
                <p>Music</p>
                <p>ChatGPT</p>
                <p>Watched</p>
                <p>Recently uploaded</p>
                <p>New to you</p>
            </div>

            {/* Videos Grid */}
            <div className="recommendedVideo__videos">
                <VideoCard
                    title="The Principles of Design | FREE COURSE"
                    views="487K views"
                    timestamp="6 months ago"
                    image="https://i.ytimg.com/vi/9EPTM91TBDU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOWDjmxiRzkShPegcE6989NPy_gQ"
                    channel="Envato Tuts+"
                    channelImage="https://yt3.ggpht.com/ytc/AL5GRJWIPw3Iq6NN1MWy9a6U-4P2der0Y7Ext7VA6_RovA=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard
                    title="⚠️ CONFESIÓN de LUISÓN tras atracar (JAMÁS lo imaginarías)"
                    views="25K views"
                    timestamp="10 months ago"
                    image="https://i.ytimg.com/vi/3R0lGo1bUcI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPj0tezXA3bEvVe52fESYjNIKPYQ"
                    channel="Luis Fernández Siles"
                    channelImage="https://yt3.ggpht.com/ytc/AL5GRJWah9mVEUH7PQ72qqkhDHxtzV8zGWDWoVSXZiY-YA=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard
                    title="Full HHTTP Networking Course - Fetch and REST APIs in JavaScript"
                    views="307K views"
                    timestamp="1 month ago"
                    image="https://i.ytimg.com/vi/2JYT5f2isg4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfMkVw32Ek8BKhBrj6gIF716s71A"
                    channel="freeCodeCamp.org"
                    channelImage="https://yt3.ggpht.com/ytc/AL5GRJXPR4dSz0wwP-elkeiWUMnfZlCtNZP8Rd-tmFOZYg=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard
                    title="React.js: The Documentary"
                    views="558K views"
                    timestamp="3 weeks ago"
                    image="https://i.ytimg.com/vi/8pDqJVdNa44/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDNkWReFkOJBoYseLDmr8QD0AiSzw"
                    channel="Honeypot"
                    channelImage="https://yt3.ggpht.com/ytc/AL5GRJXvWF9Y4mRniupp2yTeVFPHI1TO6wgVp4IrCCAHGQ=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard
                    title="15 MINUTE ARM WORKOUT (DUMBELL ONLY"
                    views="8.5M views"
                    timestamp="2 years ago"
                    image="https://i.ytimg.com/vi/UY6-JzdnHUM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4e_NtNwZWrufb1q4_fjzEsH8RlQ"
                    channel="Fraser Wilson"
                    channelImage="https://yt3.ggpht.com/ytc/AL5GRJUHbk7QlS2tDazFMin97q8SGHb22PcnUGsRXUQK7Q=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard
                    title="¿Cuando y Po Que Decayeron Los Simpsons? | Video Ganador..."
                    views="12M views"
                    timestamp="2 years ago"
                    image="https://i.ytimg.com/vi/pFet8T2evZU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEWoauWqM7M3aw27Be31P1FkINvw"
                    channel="Te lo resumo"
                    channelImage="https://yt3.ggpht.com/ytc/AL5GRJW8rdUvHSHH7cfxRqLJtNiv_lwfLz3w58yZZpLBoMQ=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard
                    title="Aprendiendo NextJS, el framework de React con SSR"
                    views="197K views"
                    timestamp="Streamed 2 year ago"
                    image="https://i.ytimg.com/vi/2jxc8DMzt0I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8wttNXzwUj6Xc1UPFsE8GH7YlDw"
                    channel="midudev"
                    channelImage="https://yt3.ggpht.com/ytc/AL5GRJUHpk0e-vSyv0PwF6jyIDz2dkx6_9dhBqtINl5zDQ=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard
                    title="Build and Deploy a Full Stack MERN AI Image Generation AppE"
                    views="191K views"
                    timestamp="2 months ago"
                    image="https://i.ytimg.com/vi/EyIvuigqDoA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAA5CL6qWlMIrLX7-s3Lmj2p69JWw"
                    channel="JavaScript Mastery"
                    channelImage="https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s68-c-k-c0x00ffffff-no-rj"
                />
                <hr />
            </div>

            {/* Shorts */}

            <div className="recommendedVideo__shorts">
                <div className="shorts__title">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Youtube_shorts_icon.svg/1649px-Youtube_shorts_icon.svg.png"
                        alt=""
                    />
                    <h2>Shorts</h2>
                </div>

                <div className="shortsVideos__Cards">
                    <ShortsCard
                        image="https://i.ytimg.com/vi/BFWv714PW20/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCP6UWkt93t3_vB6Sr3xo-iyYywTA"
                        title="Código SECRETO del libro AJEDREZ DE TORNEO ❓"
                        views="16K views"
                    />
                    <ShortsCard
                        image="https://i.ytimg.com/vi/CfhEzDd-hFM/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCJS0Umy68AOCKJT8QMhVx5Jw7VQA"
                        title="TRUCAZO para buscar en Google como un PRO"
                        views="7.3K views"
                    />
                    <ShortsCard
                        image="https://i.ytimg.com/vi/45_ixXQjAmY/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDw9-yHxReuakT_8rSdfWh6KvdVgA"
                        title="MESSI habló del STREAM con KUN"
                        views="470K views"
                    />
                    <ShortsCard
                        image="https://i.ytimg.com/vi/NsqoVbGkqLE/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCC_JSFWUl0aGiZ-vM-CsH2nc2htA"
                        title="4 HTML Snippets You Don't Know #developer..."
                        views="682K views"
                    />
                    <ShortsCard
                        image="https://i.ytimg.com/vi/K4VZ5zTthew/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDOetwS5b25P3L4chyrvLKW0CfSyA"
                        title="Don't drop your prices of your web design services!"
                        views="1.5K views"
                    />
                    <ShortsCard
                        image="https://i.ytimg.com/vi/KtcnDmJQAQs/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLD7sRTAcYD8HgERhlt9VJTa_aKQWA"
                        title="Steph Curry shares a LeBron James Story 👑..."
                        views="359K views"
                    />
                </div>

                <div className="shortsCard__expand">
                    <ExpandMoreIcon />
                </div>
                <hr />

            </div>

            <div className="recommendedVideo__videos">
                <VideoCard
                    title="Spring Jazz - Jazz & Bossa Nova Piano smooth"
                    views="460K views"
                    timestamp="3 days ago"
                    image="https://i.ytimg.com/vi/hqjHJP56hK0/hq720_live.jpg?sqp=CNSrkqAG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwWem7S3pj8Hds73eBkNetm4e_zw"
                    channel="Cafe Cozy Jazz "
                    channelImage="https://yt3.googleusercontent.com/kj9VngnbnhkmZrqHJPnxvbh7KaNkLp_UYu3UMI-7G1FoPsRqwObpgRWAhi1gbZ4_vEIW15Yuhw=s176-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard
                    title="FC Barcelona 6-1 PSG (Insane Comeback) (6-5 agg.) | Highlights"
                    views="1.5M views"
                    timestamp="2 months ago"
                    image="https://i.ytimg.com/vi/kzKeJ-w6xfs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSu6__8kgZDLbLaT6eb1GVv21wig"
                    channel="FF"
                    channelImage="https://yt3.ggpht.com/NTJW_XcEtXwPKqUza7xdDc-UXgIYASzX9dRtng52X8Sm1Ouw2QymX3pQiYjyi9YJdlNn2ETV=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard
                    title="Kooringal Lodge: Mid-Century Modern Industrial Design"
                    views="307K views"
                    timestamp="4 months ago"
                    image="https://i.ytimg.com/vi/cDFWDCizW8I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZyMA7C7zankWCCOKPNqLej8fk8g"
                    channel="ABI Interiors"
                    channelImage="https://yt3.ggpht.com/8Hmta2LMJrGKnZe1YOPzFNLm9eRB_Lar70WMqd78PEdvJBOiN8jylwGGj9skPnkwvHfgn3cO=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard
                    title="The Best of Queen and Freddie Mercury (part 1)"
                    views="482K views"
                    timestamp="1 year ago"
                    image="https://i.ytimg.com/vi/KkK5ImRbimE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcuh5Fex_0DfAvuKDQ1xDNmk_cDQ"
                    channel="Nortmehanik"
                    channelImage="https://yt3.ggpht.com/ytc/AL5GRJVvPiWkBCuNq5MmujQM1O-t9p2WOpnRWggOfKIV=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard
                    title="Learn Any New Framework/Language FAST"
                    views="35K views"
                    timestamp="4 days ago"
                    image="https://i.ytimg.com/vi/zTAWYY5cb0M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlxg1Wj5g-FI7QMQjqDDcxO0Hb7A"
                    channel="Web Dev Simplified"
                    channelImage="https://yt3.ggpht.com/ytc/AL5GRJXjrfspJ8wxKzvK-Q9qRfQGRPFGj1OfJGzDDDOp=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard
                    title="Figma components: the basics to creating robust components"
                    views="158K views"
                    timestamp="2 years ago"
                    image="https://i.ytimg.com/vi/hnx5UWaP_jo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtecyovdqDnKKYx858XkwRYOIKDw"
                    channel="Kevin Powell"
                    channelImage="https://yt3.ggpht.com/ytc/AL5GRJUvyoz58-Shq477iC8w1Q0zl8Cp10Zmuo6Gw9YUrA=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard
                    title="Consejo para resolver errorres de codigo más rápido"
                    views="14K views"
                    timestamp="10 days ago"
                    image="https://i.ytimg.com/vi/bkOkdCdG4_E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfPJ523lN-sD1WjoeiR6EqzCkiVA"
                    channel="Fatz"
                    channelImage="https://yt3.ggpht.com/ytc/AL5GRJV-I1VE-q87CKx_5E0v-t-3CfgyRFXL23DtZSY1qw=s68-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard
                    title="Curso JavaScript: 55. Proxies - #jonmircha"
                    views="18K views"
                    timestamp="2 years ago"
                    image="https://i.ytimg.com/vi/7njrLMJgDtQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7bRs2x4QwVfG0IOu_KrGHHjqCkQ"
                    channel="jonmircha"
                    channelImage="https://yt3.ggpht.com/cxZ0gdwcKZINPA0wcSjICgwaa_dLjwJUPcYjpUJTeDoZfB_gVumTpKCOACF9fiPHvwBvXpV6=s68-c-k-c0x00ffffff-no-rj"
                />
                <hr />
            </div>
        </div>
    );
};

export default RecommendedVideo;
