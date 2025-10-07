import Link from "next/link";
export default function AccountNavigation() {
 return (
   <div id="wd-account-navigation">
     <Link href="Signin" style={{ color: "red" }}> Signin </Link> <br />
     <Link href="Signup" style={{ color: "red" }}> Signup </Link> <br />
     <Link href="Profile" style={{ color: "red" }}> Profile </Link> <br />
   </div>
);}
