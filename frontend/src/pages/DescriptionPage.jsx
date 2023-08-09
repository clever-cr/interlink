import StartButton from "../components/ui/StartButton";

function DescriptionPage(){
    return(<><div className="padding px-32 py-5" > <h3 className="text-sm bg-[#4B6BFB] text-white rounded-lg shadow-sm"> Technology  </h3> </div>
        <div className="padding px-32 py-5"><h4 className="text-2xl font-bold font-mono"> frontend developer intern </h4> </div >
        <div className="flex items-center space-x-2  padding px-32">
  <div className="h-4 w-4 ">
    <img src="frontend\src\pages\avatar.jpg" alt="User Icon" class="h-full w-full "></img>
  </div>
  
  <span className="text-xs text-gray-500">John Doe</span>
  
  <span className="text-xs text-gray-500">August 8, 2023</span>
</div> 
<div className="padding px-32 "><h5 className="text-xl font-bold font-mono"> a short description </h5> </div >
<div className="padding px-32 py-5"><p className="text-lg  font-serif"> Join our dynamic team as a [Job Title] Intern at [Company Name]! This [Duration] internship offers hands-on experience in [specific tasks or projects], providing a unique opportunity to learn and contribute to our [industry/field] initiatives. Ideal for students or recent graduates with strong [relevant skills], this internship promises insights into [industry/field] practices and valuable networking opportunities. </p> </div >
<div className="padding px-32 py-5">
    <StartButton  text="apply" />
    </div>
    </>)

}
export default DescriptionPage;