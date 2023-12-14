import React from 'react'; 
const MyComponent = () => {
    function toggleAnswer(question) {
        var answer = question.nextElementSibling;
        answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
    }
  const htmlContent = `
   
  <div class="container">
  <div class="header">
      <div class="head-list">
          <h4 style="color: blueviolet; font-family: sans-serif; font-weight: lighter;">PRICING</h4>
          <h1
              style="font-family: sans-serif; letter-spacing: 0.1cm; color: rgb(186, 195, 217); font-size: xx-large;">
              Simple pricing</h1>
          <h3 style="color: rgb(148, 151, 158); font-family: sans-serif; font-weight: lighter;">Upgrade for
              extra features and collaboration with your team.
          </h3>
      </div>
  </div>
  <div class="price-details">
      <div class="box">
          <div class="logo">
              <div class="circle"><svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="m56 100v68l72 68v-68h72l-144-136h144v68z" opacity=".2"/><path d="m128.00171 244a7.9983 7.9983 0 0 1 -5.49463-2.18408l-72-68a7.99871 7.99871 0 0 1 -2.50708-5.81592v-68a7.99993 7.99993 0 0 1 8-8h51.87817l-57.37109-54.18408a7.99982 7.99982 0 0 1 5.49292-13.81592h144a7.99993 7.99993 0 0 1 8 8v68a7.99993 7.99993 0 0 1 -8 8h-51.87817l57.37109 54.18408a7.99982 7.99982 0 0 1 -5.49292 13.81592h-64v60a7.9996 7.9996 0 0 1 -7.99829 8zm-64.00171-79.44824 56 52.88867v-49.44043a7.99993 7.99993 0 0 1 8-8h51.87817l-55.05883-52h-60.81934zm67.18066-72.55176h60.81934v-52h-115.87817z"/></svg></div>
              <div>
                  <p style="padding: 20px 0 0 25px; font-family: sans-serif c; color: rgb(148, 151, 158);">BASIC
                  </p>
              </div>
          </div>
          <div class="content">
              <div>
                  <h1>$0<span>/free</span></h1>
              </div>
              <div>
                  <h1>What's included:</h1>
              </div>
              <div>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(148, 151, 158)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Unlimited tasks</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(148, 151, 158)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Unlimited projects</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(148, 151, 158)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Unlimited messages</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(148, 151, 158)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Unlimited activity log</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(148, 151, 158)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;File storage (100MB )</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(148, 151, 158)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Custom fields</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(148, 151, 158)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;List view projects</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(148, 151, 158)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Board view projects</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(148, 151, 158)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Calendar view</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(148, 151, 158)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Assignee and due dates</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(148, 151, 158)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Unlimited file viewers</h3>
                  <button class="start">Start for free</button>
              </div>

          </div>

      </div>
      <div class="box">
          <div class="logo">
              <div class="circle2"><svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="m56 100v68l72 68v-68h72l-144-136h144v68z" opacity=".2"/><path d="m128.00171 244a7.9983 7.9983 0 0 1 -5.49463-2.18408l-72-68a7.99871 7.99871 0 0 1 -2.50708-5.81592v-68a7.99993 7.99993 0 0 1 8-8h51.87817l-57.37109-54.18408a7.99982 7.99982 0 0 1 5.49292-13.81592h144a7.99993 7.99993 0 0 1 8 8v68a7.99993 7.99993 0 0 1 -8 8h-51.87817l57.37109 54.18408a7.99982 7.99982 0 0 1 -5.49292 13.81592h-64v60a7.9996 7.9996 0 0 1 -7.99829 8zm-64.00171-79.44824 56 52.88867v-49.44043a7.99993 7.99993 0 0 1 8-8h51.87817l-55.05883-52h-60.81934zm67.18066-72.55176h60.81934v-52h-115.87817z"/></svg></div>
              <div>
                  <p style="padding: 20px 0 0 25px; font-family: sans-serif c; color: rgb(148, 151, 158);">PREMIUM
                  </p>
              </div>
          </div>
          <div class="content">
              <div>
                  <h1>$9<span>/per user</span></h1>
              </div>
              <div>
                  <h1>What's included:</h1>
              </div>
              <div>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="green">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Timeline</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="green">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Workflow Builder</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="green">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Unlimited Dashboards</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="green">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Unlimited projects</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="green">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Advanced search</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="green">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Custom fields</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="green">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Forms</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="green">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Rules</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="green">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Task Templates</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="green">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Private teams & projects</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="green">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Unlimited free quests</h3>
                  <button class="start2">Get Premium</button>
              </div>

          </div>

      </div>
      <div class="box">
          <div class="logo">
              <div class="circle3"><svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="m56 100v68l72 68v-68h72l-144-136h144v68z" opacity=".2"/><path d="m128.00171 244a7.9983 7.9983 0 0 1 -5.49463-2.18408l-72-68a7.99871 7.99871 0 0 1 -2.50708-5.81592v-68a7.99993 7.99993 0 0 1 8-8h51.87817l-57.37109-54.18408a7.99982 7.99982 0 0 1 5.49292-13.81592h144a7.99993 7.99993 0 0 1 8 8v68a7.99993 7.99993 0 0 1 -8 8h-51.87817l57.37109 54.18408a7.99982 7.99982 0 0 1 -5.49292 13.81592h-64v60a7.9996 7.9996 0 0 1 -7.99829 8zm-64.00171-79.44824 56 52.88867v-49.44043a7.99993 7.99993 0 0 1 8-8h51.87817l-55.05883-52h-60.81934zm67.18066-72.55176h60.81934v-52h-115.87817z"/></svg></div>
              <div>
                  <p style="padding: 20px 0 0 25px; font-family: sans-serif c; color: rgb(148, 151, 158);">
                      BUSINESS</p>
              </div>
          </div>
          <div class="content">
              <div>
                  <h1>$19<span>/unlimited</span></h1>
              </div>
              <div>
                  <h1>What's included:</h1>
              </div>
              <div>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(87, 42, 165)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Portfolios</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(87, 42, 165)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Goals</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(87, 42, 165)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Workload</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(87, 42, 165)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Custom rules builder</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(87, 42, 165)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Forms branching</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(87, 42, 165)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Approvals</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(87, 42, 165)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Proofing</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(87, 42, 165)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Lock custom fields</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(87, 42, 165)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Advanced reporting</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(87, 42, 165)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Time Tracking</h3>
                  <h3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                          fill="rgb(87, 42, 165)">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>&nbsp;&nbsp;Advanced integrations</h3>
                  <button class="start3">Get Business</button>
              </div>

          </div>

      </div>
  </div>
  <div class="container">
      <div class="head-list">
          <h1
              style="font-family: sans-serif; letter-spacing: 0.1cm; color: rgb(186, 195, 217); font-size: xx-large;">
              Compare plans & features</h1>
          <h3 style="color: rgb(148, 151, 158); font-family: sans-serif; font-weight: lighter;">
              Overview of what’s included in our different plans.
          </h3>
      </div>

      <div class="frame1">
          <div class="frame2">
              <div class="frame3">
                  <div class="frame4">
                      <div>
                          <h3>BASIC <br/>$0 / free</h3>
                      </div>
                      <div><button class="start4">Start for Free</button></div>
                  </div>
              </div>
          </div>
          <div class="frame5">
              <div class="frame3">
                  <div class="frame4">
                      <div>
                          <h3>PREMIUM <br/>$0 / 50 users</h3>
                      </div>
                      <div><button class="start5">Get Premium</button></div>
                  </div>

              </div>
          </div>
          <div class="frame6">
              <div class="frame3">
                  <div class="frame4">
                      <div>
                          <h3>BUSINESS <br/>$0 / unlimited</h3>
                      </div>
                      <div><button class="start6">Get Business</button></div>
                  </div>
              </div>
          </div>

      </div>
      <div class="frame_kit">
          <div class="frame_kit1">


              <h2 id="usage">USAGE</h2>

              <ul>
                  <li>Unlimited task&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      fill="rgb(148, 151, 158)">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                  fill="green">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
              fill="rgb(87, 42, 165)">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg></li>
                  <li>Unlimited task&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      fill="rgb(148, 151, 158)">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                  fill="green">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
              fill="rgb(87, 42, 165)">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg></li>
                  <li>Unlimited message&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      fill="rgb(148, 151, 158)">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                  fill="green">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
              fill="rgb(87, 42, 165)">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg></li>
                  <li>Activity log&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      fill="rgb(148, 151, 158)">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                  fill="green">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
              fill="rgb(87, 42, 165)">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg></li>

              </ul>



              <h2 id="features">FEATURES</h2>

              <ul>
                  <li>Projects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      fill="rgb(148, 151, 158)">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                  fill="green">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
              fill="rgb(87, 42, 165)">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg></li>
                  <li>Integrations&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      fill="rgb(148, 151, 158)">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</li>
                  <li>Web hooks&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      fill="rgb(148, 151, 158)">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                  fill="green">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
              fill="rgb(87, 42, 165)">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg></li>
                  <li>Import and export&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      fill="rgb(148, 151, 158)">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                  fill="green">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
              fill="rgb(87, 42, 165)">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg></li>
                  <li>Private teams</li>
                  <li>Guest accounts</li>
                  <li>SLAs</li>

              </ul>

              <h2 id="analytics">ANALYTICS</h2>


              <ul>

                  <li>Progress report&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      fill="rgb(148, 151, 158)">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                  fill="green">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
              fill="rgb(87, 42, 165)">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg></li>
                  <li>Insight</li>
                  <li>Data warehouse</li>

              </ul>

              <h2 id="security">SECURITY</h2>
              <ul>

                  <li>SSO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      fill="rgb(148, 151, 158)">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                  fill="green">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              &nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
              fill="rgb(87, 42, 165)">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L5.83 13l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg></li>
                  <li>Admin tools</li>
                  <li>Advance history</li>
                  <li>Authetenction</li>
                  <li>Audit log</li>
                  <li>App management</li>
                  <li>Domain claimaing</li>
              </ul>
              <h2 id="support">SUPPORT</h2>
              <ul>

                  <li>Priority support</li>
              </ul>
          </div>
      </div>

  </div>
  <div class="container">
      <div class="head-list">
          <h1 style="font-family: Arial, Helvetica, sans-serif;">Frequently Asked Questions</h1>
          <h3 style="font-weight: lighter;">Seamlessly use your preferred tools for unified work, start to finish.
          </h3>
      </div>
      <div class="faq-container">
          <div class="faq-question" onclick="toggleAnswer(this)">
              <h3>Question 1: What is
                  Worko?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#43;
              </h3>
          </div>
          <div class="faq-answer">
              <p>Worko is a task management application designed to help users organize their daily tasks, prioritize work, and improve productivity. 
                  It's a user-friendly tool that streamlines work management for individuals and teams.</p>
          </div>
      </div>
  </div>
  <div class="faq-container">
      <div class="faq-question" onclick="toggleAnswer(this)">
          <h3>How can I get started with
              Worko?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#43;
          </h3>
      </div>
      <div class="faq-answer">
          <p>To get started with Worko, visit our website or download the Worko app from your device's app store. 
              Once installed, create an account, and you can start managing your tasks immediately.</p>
      </div>
  </div>
  <div class="faq-container">
      <div class="faq-question" onclick="toggleAnswer(this)">
          <h3>Is Worko available on multiple
              platforms?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#43;
          </h3>
      </div>
      <div class="faq-answer">
          <p>Yes, Worko is available on various platforms, including web browsers, iOS, Android, and desktop applications.
               This ensures that you can access your tasks from any device.</p>
      </div>
  </div>
  <div class="faq-container">
      <div class="faq-question" onclick="toggleAnswer(this)">
          <h3>What features does Worko offer for task
              management?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#43;
          </h3>
      </div>
      <div class="faq-answer">
          <p>Worko provides features such as task creation, due dates, priority levels, task categorization, task sharing, notifications, and progress tracking.
               Users can also create recurring tasks and set reminders.</p>
      </div>
  </div>
  <div class="faq-container">
      <div class="faq-question" onclick="toggleAnswer(this)">
          <h3>Can I use Worko for team
              collaboration?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#43;
          </h3>
      </div>
      <div class="faq-answer">
          <p>Yes, Worko offers collaboration features that allow you to share tasks and projects with team members.
               You can assign tasks, leave comments, and monitor the progress of shared projects.</p>
      </div>
  </div>
  <div class="faq-container">
      <div class="faq-question" onclick="toggleAnswer(this)">
          <h3>Is Worko available in multiple
              languages?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#43;
          </h3>
      </div>
      <div class="faq-answer">
          <p>Yes, Taskify supports multiple languages to cater to a diverse user base.
               You can choose your preferred language in the app settings.</p>
      </div>
  </div>

  <script>






document.addEventListener('DOMContentLoaded', function () {
var headings = document.querySelectorAll('.frame_kit1 h2');
var listItems = document.querySelectorAll('.frame_kit1 ul');

window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;

  headings.forEach(function (heading, index) {
    
    var rect = ul.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      headings.forEach(function (h) {
        h.classNameList.remove('active');
      });

      heading.classNameList.add('active');
    }
  });

  listItems.forEach(function (ul) {
    var rect = ul.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      listItems.forEach(function (list) {
        list.classNameList.remove('active');
      });

      ul.classNameList.add('active');
    }
  });
});
});



      function toggleAnswer(question) {
          var answer = question.nextElementSibling;
          answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
      }








  </script>

</div>
</div>

  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default MyComponent;
