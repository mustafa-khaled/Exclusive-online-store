import Button from "../../ui/Button";

function UserData({ loggedInUser, handleLogout }) {
  return (
    <div className="flex w-full flex-col gap-[10px] bg-lightGray p-[20px] text-center text-primary  md:w-[50%]">
      <i className="fa-regular fa-circle-user text-[50px] text-gray"></i>
      <h2 className="text-xl  font-semibold">
        Name: {loggedInUser.data.user.name}
      </h2>
      <h2 className="text-xl font-semibold">
        Email: {loggedInUser.data.user.email}
      </h2>
      <Button onClick={handleLogout}>Log Out</Button>
    </div>
  );
}

export default UserData;
