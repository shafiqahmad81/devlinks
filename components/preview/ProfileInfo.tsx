import Image from "next/image";

function ProfileInfo() {
  return (
    <div className="text-center">
      <div className="size-24 mx-auto rounded-full ring-2 ring-primary mb-6 overflow-clip">
        <Image
          src="/assets/shafiq.jpg"
          alt="Prfile picture"
          width={96}
          height={96}
        />
      </div>
      <h3 className="mb-2 text-3xl">Shahidul Islam</h3>
      <p>ishahin56@gmail.com</p>
    </div>
  );
}

export default ProfileInfo;
