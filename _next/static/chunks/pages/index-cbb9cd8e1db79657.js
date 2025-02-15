(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(2494)}])},2494:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return u}});var s=i(5893),l=i(9008),r=i.n(l),n=i(1664),a=i.n(n);function o(){return(0,s.jsx)("header",{className:"fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-50 backdrop-blur-lg shadow-lg z-10",children:(0,s.jsx)("nav",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-4",children:(0,s.jsx)("div",{className:"flex justify-between items-center",children:(0,s.jsx)(a(),{href:"/",className:"text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors",children:"Cville AI Explorers"})})})})}function c(){return(0,s.jsx)("footer",{className:"bg-gray-800 bg-opacity-50 backdrop-blur-lg text-gray-300 py-8 relative z-10",children:(0,s.jsxs)("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[(0,s.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[(0,s.jsxs)("div",{className:"mb-4 md:mb-0",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold text-blue-400",children:"Cville AI Explorers"}),(0,s.jsx)("p",{className:"text-gray-400",children:"Building with AI in Charlottesville, Virginia"})]}),(0,s.jsxs)("div",{className:"flex space-x-4",children:[(0,s.jsx)("a",{href:"#",className:"hover:text-white transition-colors",children:"Meetup"}),(0,s.jsx)("a",{href:"#",className:"hover:text-white transition-colors",children:"GitHub"})]})]}),(0,s.jsxs)("div",{className:"mt-8 text-center text-gray-400",children:["\xa9 ",new Date().getFullYear()," Cville AI Explorers. All rights reserved."]})]})})}function d(e){let{children:t}=e;return(0,s.jsxs)("div",{className:"flex flex-col min-h-screen bg-gray-900 text-gray-100 relative",children:[(0,s.jsxs)(r(),{children:[(0,s.jsx)("title",{children:"Cville AI Explorers"}),(0,s.jsx)("meta",{name:"description",content:"Building with AI in Charlottesville, Virginia"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)(o,{}),(0,s.jsx)("main",{className:"flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10",children:t}),(0,s.jsx)(c,{})]})}var h=i(7294),x=()=>{let e=(0,h.useRef)(null);return(0,h.useEffect)(()=>{let t=e.current;if(!t)return;let i=t.getContext("2d");if(!i)return;let s=()=>{t.width=window.innerWidth,t.height=window.innerHeight};s(),window.addEventListener("resize",s);let l=[],r=0,n=0;class a{update(){this.x+=this.speedX,this.y+=this.speedY,this.x>t.width?this.x=0:this.x<0&&(this.x=t.width),this.y>t.height?this.y=0:this.y<0&&(this.y=t.height);let e=this.x-r,i=this.y-n;100>Math.sqrt(e*e+i*i)?this.size=Math.min(this.size+.1,5):this.size=Math.max(this.size-.1,1)}draw(){i&&(i.fillStyle="rgba(100, 200, 255, 0.7)",i.beginPath(),i.arc(this.x,this.y,this.size,0,2*Math.PI),i.fill())}constructor(){this.x=Math.random()*t.width,this.y=Math.random()*t.height,this.size=5*Math.random()+1,this.speedX=.165*Math.random()-.0825,this.speedY=.165*Math.random()-.0825}}(function(){for(let e=0;e<100;e++)l.push(new a)})(),function e(){if(i){i.clearRect(0,0,t.width,t.height);for(let e=0;e<l.length;e++){l[e].update(),l[e].draw();for(let t=e;t<l.length;t++){let s=l[e].x-l[t].x,r=l[e].y-l[t].y,n=Math.sqrt(s*s+r*r);n<100&&(i.beginPath(),i.strokeStyle="rgba(100, 200, 255, ".concat(.2-n/800,")"),i.lineWidth=.75,i.moveTo(l[e].x,l[e].y),i.lineTo(l[t].x,l[t].y),i.stroke())}}requestAnimationFrame(e)}}();let o=e=>{r=e.clientX,n=e.clientY};return window.addEventListener("mousemove",o),()=>{window.removeEventListener("resize",s),window.removeEventListener("mousemove",o)}},[]),(0,s.jsx)("canvas",{ref:e,className:"fixed inset-0 w-full h-full",style:{zIndex:0}})};function m(){let[e,t]=(0,h.useState)(!1);return(0,s.jsxs)("section",{className:"bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg p-8 relative overflow-hidden",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold section-header mb-6",children:"Our Sponsors"}),(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsx)("a",{href:"https://www.studioix.co/",target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-80 transition-opacity",children:(0,s.jsx)("img",{src:"".concat("/cville-ai-explorers-website","/assets/STUDIO_IX_Logo_White.jpg"),alt:"Studio IX Logo",width:200,height:100,className:"mb-4"})}),(0,s.jsx)("p",{className:"text-gray-300 text-lg mb-4 text-center",children:"Studio IX is a coworking space in downtown Charlottesville, Virginia, designed for freelancers, entrepreneurs, and remote workers."}),(0,s.jsx)("button",{onClick:()=>t(!e),className:"px-3 py-1 text-sm bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors",children:e?"Show Less":"Learn More"}),e&&(0,s.jsxs)("div",{className:"mt-4 text-gray-300",children:[(0,s.jsx)("p",{className:"mb-2",children:"It offers a flexible shared office environment with options for open workspaces, dedicated desks, and private offices. The space fosters a collaborative community through weekly events and mixers, featuring a 'warm industrial' atmosphere with ample natural light."}),(0,s.jsx)("p",{className:"mb-2",children:"Amenities include high-speed internet, soundproof phone booths, conference rooms, and premium coffee. Studio IX is staffed by a community manager on weekdays and provides 24/7 access for members."}),(0,s.jsx)("p",{className:"mb-4",children:"Tours of the space are available; interested individuals can contact them via:"}),(0,s.jsxs)("ul",{className:"list-disc list-inside",children:[(0,s.jsxs)("li",{children:["Email:"," ",(0,s.jsx)("a",{href:"mailto:COWORK@STUDIOIX.CO",className:"text-blue-400 hover:text-blue-300 underline transition-colors",children:"COWORK@STUDIOIX.CO"})]}),(0,s.jsxs)("li",{children:["Phone:"," ",(0,s.jsx)("a",{href:"tel:+14342603803",className:"text-blue-400 hover:text-blue-300 underline transition-colors",children:"434.260.3803"})]}),(0,s.jsxs)("li",{children:["Website:"," ",(0,s.jsx)("a",{href:"https://www.studioix.co/",target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-300 underline transition-colors",children:"https://www.studioix.co/"})]})]})]})]})]})}function u(){return(0,h.useEffect)(()=>{let e=e=>{e.preventDefault();let t=e.currentTarget.getAttribute("href");if(t){let e=document.querySelector(t);null==e||e.scrollIntoView({behavior:"smooth"})}},t=document.querySelectorAll('a[href^="#"]');return t.forEach(t=>{t.addEventListener("click",e)}),()=>{t.forEach(t=>{t.removeEventListener("click",e)})}},[]),(0,s.jsxs)(d,{children:[(0,s.jsx)(x,{}),(0,s.jsxs)("div",{className:"space-y-6 relative",children:[(0,s.jsx)("div",{className:"mb-8"}),(0,s.jsxs)("section",{id:"hero",className:"min-h-[40vh] flex flex-col justify-center items-center text-center relative",children:[(0,s.jsx)("h1",{className:"text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4",children:"Cville AI Explorers"}),(0,s.jsx)("p",{className:"text-xl text-gray-300 mb-8",children:"Building with AI in Charlottesville, Virginia"}),(0,s.jsxs)("p",{className:"text-2xl font-semibold text-blue-400",children:["Next Meetup:"," ",(0,s.jsx)("a",{href:"https://www.meetup.com/cville-tech/",className:"underline hover:text-blue-300 transition-colors",target:"_blank",rel:"noopener noreferrer",children:"March 15, 2025"})]})]}),(0,s.jsxs)("section",{id:"about",className:"bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg p-8 relative overflow-hidden",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold section-header mb-6",children:"About Us"}),(0,s.jsx)("p",{className:"text-gray-300 text-lg mb-4",children:"We are a group of builders, learners, and enthusiasts who gather to:"}),(0,s.jsxs)("ul",{className:"list-disc list-inside text-gray-300 text-lg space-y-2",children:[(0,s.jsx)("li",{children:"Build practical AI applications and tools"}),(0,s.jsx)("li",{children:"Share technical knowledge and implementation experiences"}),(0,s.jsx)("li",{children:"Learn about and explore emerging AI technologies"}),(0,s.jsx)("li",{children:"Discover ways to enhance productivity and creativity"}),(0,s.jsx)("li",{children:"Support each other in creating AI-powered solutions"})]})]}),(0,s.jsxs)("section",{id:"mission",className:"bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg p-8 relative overflow-hidden",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold section-header mb-6",children:"Our Mission"}),(0,s.jsx)("p",{className:"text-gray-300 text-lg",children:"Our mission is to foster a community where people can develop AI building skills through hands-on projects, technical sharing, and collaborative learning, and discover practical ways to integrate AI tools into their work and daily lives. While our focus is on active building and implementation, we welcome anyone interested in learning these skills."})]}),(0,s.jsxs)("section",{id:"activities",className:"bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg p-8 relative overflow-hidden",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold section-header mb-6",children:"Activities and Directions"}),(0,s.jsxs)("ul",{className:"list-disc list-inside text-gray-300 text-lg space-y-2",children:[(0,s.jsx)("li",{children:"Exploring modern AI platforms and workflow tools"}),(0,s.jsx)("li",{children:"Technical demos and talks from AI builders"}),(0,s.jsx)("li",{children:"Technical book discussions and learning circles"}),(0,s.jsx)("li",{children:"Collaborative building sessions and group projects"})]})]}),(0,s.jsxs)("section",{id:"join",className:"bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg p-8 relative overflow-hidden",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold section-header mb-6",children:"Join Us"}),(0,s.jsx)("p",{className:"text-gray-300 text-lg mb-4",children:"Whether you're actively building AI applications or eager to learn how, there's a place for you in our community. We emphasize practical skills and implementation while maintaining an inclusive environment for learning."}),(0,s.jsx)("h3",{className:"text-2xl font-semibold text-blue-400 mb-4",children:"Get Involved"}),(0,s.jsxs)("ul",{className:"list-disc list-inside text-gray-300 text-lg space-y-2",children:[(0,s.jsx)("li",{children:"Attend our meetups"}),(0,s.jsx)("li",{children:"Share your AI experiences"}),(0,s.jsx)("li",{children:"Collaborate with other members"}),(0,s.jsx)("li",{children:"Present your projects or findings"}),(0,s.jsx)("li",{children:"Learn from peers"})]})]}),(0,s.jsxs)("section",{id:"code-of-conduct",className:"bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg p-8 relative overflow-hidden",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold section-header mb-6",children:"Code of Conduct"}),(0,s.jsxs)("p",{className:"text-gray-300 text-lg",children:["Cville AI Explorers follows the"," ",(0,s.jsx)("a",{href:"https://github.com/cville/conduct",className:"text-blue-400 hover:text-blue-300 underline transition-colors",target:"_blank",rel:"noopener noreferrer",children:"Cville Slack Code of Conduct"}),"."]})]}),(0,s.jsx)(m,{})]})]})}}},function(e){e.O(0,[996,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);