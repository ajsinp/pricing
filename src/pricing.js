import React from 'react';


const Money = () => {

    return (

        <div className="container">
            <div className="header">
                <div className="head-list">
                    <h4 style={{ color: "blueviolet", fontFamily: "sans-serif", fontWeight: "lighter" }}>PRICING</h4>
                    <h1 className="list" style={{ fontFfamily: "sans-serif", letterSpacing: "0.1cm", color: "rgb(186, 195, 217)", fontSize: "xx-large" }}>
                        Simple pricing</h1>
                    <h3 className="list-1" style={{ color: "rgb(148, 151, 158)", fontFamily: "sans-serif", fontWeight: "lighter" }}>Upgrade for
                        extra features and collaboration with your team.
                    </h3>
                </div>
            </div>
            <div className="price-details">
                <div className="box">
                    <div className="logo">
                        <div className="circle"><svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="m56 100v68l72 68v-68h72l-144-136h144v68z" opacity=".2" /><path d="m128.00171 244a7.9983 7.9983 0 0 1 -5.49463-2.18408l-72-68a7.99871 7.99871 0 0 1 -2.50708-5.81592v-68a7.99993 7.99993 0 0 1 8-8h51.87817l-57.37109-54.18408a7.99982 7.99982 0 0 1 5.49292-13.81592h144a7.99993 7.99993 0 0 1 8 8v68a7.99993 7.99993 0 0 1 -8 8h-51.87817l57.37109 54.18408a7.99982 7.99982 0 0 1 -5.49292 13.81592h-64v60a7.9996 7.9996 0 0 1 -7.99829 8zm-64.00171-79.44824 56 52.88867v-49.44043a7.99993 7.99993 0 0 1 8-8h51.87817l-55.05883-52h-60.81934zm67.18066-72.55176h60.81934v-52h-115.87817z" /></svg></div>
                        <div>
                            <p style={{ padding: "20px 0 0 25px", fontFamily: "sans-serif ", color: "rgb(148, 151, 158)" }}>BASIC
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <h1 className='list'>$0<span>/free</span></h1>
                        </div>
                        <div>
                            <h1 className='list'>What's included:</h1>
                        </div>
                        <div>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Unlimited tasks</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Unlimited projects</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Unlimited messages</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Unlimited activity log</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;File storage (100MB )</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Custom fields</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;List view projects</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Board view projects</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Calendar view</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Assignee and due dates</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(148, 151, 158)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Unlimited file viewers</h3>
                            <button className="start">Start for free</button>
                        </div>

                    </div>

                </div>
                <div className="box">
                    <div className="logo">
                        <div className="circle2"><svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="m56 100v68l72 68v-68h72l-144-136h144v68z" opacity=".2" /><path d="m128.00171 244a7.9983 7.9983 0 0 1 -5.49463-2.18408l-72-68a7.99871 7.99871 0 0 1 -2.50708-5.81592v-68a7.99993 7.99993 0 0 1 8-8h51.87817l-57.37109-54.18408a7.99982 7.99982 0 0 1 5.49292-13.81592h144a7.99993 7.99993 0 0 1 8 8v68a7.99993 7.99993 0 0 1 -8 8h-51.87817l57.37109 54.18408a7.99982 7.99982 0 0 1 -5.49292 13.81592h-64v60a7.9996 7.9996 0 0 1 -7.99829 8zm-64.00171-79.44824 56 52.88867v-49.44043a7.99993 7.99993 0 0 1 8-8h51.87817l-55.05883-52h-60.81934zm67.18066-72.55176h60.81934v-52h-115.87817z" /></svg></div>
                        <div>
                            <p style={{ padding: "20px 0 0 25px", fontFamily: "sans-serif", color: "rgb(148, 151, 158)" }}>PREMIUM
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <h1 className='list'>$9<span>/per user</span></h1>
                        </div>
                        <div>
                            <h1 className='list'>What's included:</h1>
                        </div>
                        <div>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Timeline</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Workflow Builder</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Unlimited Dashboards</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Unlimited projects</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Advanced search</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Custom fields</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Forms</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Rules</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Task Templates</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Private teams & projects</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="green">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Unlimited free quests</h3>
                            <button className="start2">Get Premium</button>
                        </div>

                    </div>

                </div>
                <div className="box">
                    <div className="logo">
                        <div className="circle3"><svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="m56 100v68l72 68v-68h72l-144-136h144v68z" opacity=".2" /><path d="m128.00171 244a7.9983 7.9983 0 0 1 -5.49463-2.18408l-72-68a7.99871 7.99871 0 0 1 -2.50708-5.81592v-68a7.99993 7.99993 0 0 1 8-8h51.87817l-57.37109-54.18408a7.99982 7.99982 0 0 1 5.49292-13.81592h144a7.99993 7.99993 0 0 1 8 8v68a7.99993 7.99993 0 0 1 -8 8h-51.87817l57.37109 54.18408a7.99982 7.99982 0 0 1 -5.49292 13.81592h-64v60a7.9996 7.9996 0 0 1 -7.99829 8zm-64.00171-79.44824 56 52.88867v-49.44043a7.99993 7.99993 0 0 1 8-8h51.87817l-55.05883-52h-60.81934zm67.18066-72.55176h60.81934v-52h-115.87817z" /></svg></div>
                        <div>
                            <p style={{ padding: "20px 0 0 25px", fontFamily: "sans-serif", color: "rgb(148, 151, 158)" }}>
                                BUSINESS</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <h1 className='list'>$19<span>/unlimited</span></h1>
                        </div>
                        <div>
                            <h1 className='list'>What's included:</h1>
                        </div>
                        <div>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Portfolios</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Goals</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Workload</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Custom rules builder</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Forms branching</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Approvals</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Proofing</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Lock custom fields</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Advanced reporting</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Time Tracking</h3>
                            <h3 className='list-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                fill="rgb(87, 42, 165)">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>&nbsp;&nbsp;Advanced integrations</h3>
                            <button className="start3">Get Business</button>
                        </div>

                    </div>

                </div>
            </div>
            <div className="container">
                <div className="head-list">
                    <h1 className='list' style={{ fontFamily: "sans-serif", letterSpacing: "0.1cm", color: "rgb(186, 195, 217)", fontSize: "xx-large" }}>
                        Compare plans & features</h1>
                    <h3 className='list-1' style={{ color: " rgb(148, 151, 158)", fontFamily: "sans-serif", fontWeight: "lighter" }}>
                        Overview of what’s included in our different plans.
                    </h3>
                </div>
                <div>
                    <div className="frame1">
                        <div className="frame2">
                            <div className="frame3">
                                <div className="frame4">
                                    <div>
                                        <h3 className='list-1'>BASIC <br />$0 / free</h3>
                                    </div>
                                    <div><button className="start4">Start for Free</button></div>
                                </div>
                            </div>
                        </div>
                        <div className="frame5">
                            <div className="frame3">
                                <div className="frame4">
                                    <div>
                                        <h3 className='list-1'>PREMIUM <br />$0 / 50 users</h3>
                                    </div>
                                    <div><button className="start5">Get Premium</button></div>
                                </div>

                            </div>
                        </div>
                        <div className="frame6">
                            <div className="frame3">
                                <div className="frame4">
                                    <div>
                                        <h3 className='list-1'>BUSINESS <br />$0 / unlimited</h3>
                                    </div>
                                    <div><button className="start6">Get Business</button></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="frame_kit">
                        <div className="frame_kit1">


                            <h2 id="usage" style={{fontWeight:"bolder"}}>USAGE</h2>

                            <ul className='task'>
                                <li className='un-task'>Unlimited task&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                    fill="rgb(148, 151, 158)">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="green">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="rgb(87, 42, 165)">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg></li>
                                <li className='un-task'>Unlimited task&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                    fill="rgb(148, 151, 158)">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="green">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="rgb(87, 42, 165)">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg></li>
                                <li className='un-task'>Unlimited message&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                    fill="rgb(148, 151, 158)">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="green">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="rgb(87, 42, 165)">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg></li>
                                <li className='un-task'>Activity log&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                    fill="rgb(148, 151, 158)">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="green">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="rgb(87, 42, 165)">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg></li>

                            </ul>



                            <h2 id="features" style={{fontWeight:"bolder"}}>FEATURES</h2>

                            <ul className='task'>
                                <li className='un-task'>Projects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="rgb(148, 151, 158)">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="green">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="rgb(87, 42, 165)">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg></li>
                                <li className='un-task'>Integrations&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="rgb(148, 151, 158)">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                                <li className='un-task'>Web hooks&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                    fill="rgb(148, 151, 158)">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="green">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="rgb(87, 42, 165)">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg></li>
                                <li className='un-task'>Import and export&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                    fill="rgb(148, 151, 158)">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="green">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="rgb(87, 42, 165)">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg></li>
                                <li className='un-task'>Private teams</li>
                                <li className='un-task'>Guest accounts</li>
                                <li className='un-task'>SLAs</li>

                            </ul>

                            <h2 id="analytics" style={{fontWeight:"bolder"}}>ANALYTICS</h2>


                            <ul className='task'>

                                <li className='un-task'>Progress report&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                    fill="rgb(148, 151, 158)">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="green">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="rgb(87, 42, 165)">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg></li>
                                <li className='un-task'>Insight</li>
                                <li className='un-task'>Data warehouse</li>

                            </ul>

                            <h2 id="security" style={{fontWeight:"bolder"}}>SECURITY</h2>
                            <ul className='task'>

                                <li className='un-task'>SSO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="rgb(148, 151, 158)">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="green">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="rgb(87, 42, 165)">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg></li>
                                <li className='un-task'>Admin tools</li>
                                <li className='un-task'>Advance history</li>
                                <li className='un-task'>Authetenction</li>
                                <li className='un-task'>Audit log</li>
                                <li className='un-task'>App management</li>
                                <li className='un-task'>Domain claimaing</li>
                            </ul>
                            <h2 id="support" style={{fontWeight:"bolder"}}>SUPPORT</h2>
                            <ul className='task'>
                                <li className='un-task'>Priority support</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>



    )
}

export default Money;