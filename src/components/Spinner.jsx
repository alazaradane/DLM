import { Spinner } from "@material-tailwind/react";
 
const Loading = ()=> {
  return (
    <div className="flex gap-8">
      <Spinner color="blue" width={500}/>
    </div>
  );
}

export default Loading;