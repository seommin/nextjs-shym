import { useRouter } from "next/router";

const Room = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <div className="container py-5">
        <p>Post: {id}</p>
      </div>
    </>
  );
};

export default Room;
