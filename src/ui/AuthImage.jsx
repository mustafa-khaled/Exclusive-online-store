import photo from "../assets/AuthImage.png";

function AuthImage() {
  return (
    <div>
      <img
        src={photo}
        alt="signUpPhoto"
        className="hidden max-h-[600px] w-full md:block "
      />
    </div>
  );
}

export default AuthImage;
