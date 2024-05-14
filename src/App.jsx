import { getImageUrl } from "./utils.js";

export default function Place() {
  return (
    <>
      <h1> Notable Scientists </h1>
      <Profile
        dataAvatar={{ name: "Maria Skłodowska-Curie", imageId: "szV5sdG" }}
        description={{
          profession: "physicist and chemist",
          awards:
            " 4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
          discovered: "polonium (chemical element)r",
        }}
      />
      <br />
      <Profile
        dataAvatar={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
        description={{
          profession: "geochemist",
          awards: "2 (Miyake Prize for geochemistry, Tanaka Prize)",
          discovered: "a method for measuring carbon dioxide in seawater",
        }}
      />
    </>
  );
}

function Profile({ description, dataAvatar }) {
  return (
    <div>
      <div style={{ border: "solid", padding: "20px" }}>
        <Avatar size={70} person={dataAvatar} />

        <Description desc={description} />
      </div>
    </div>
  );
}

function Avatar({ person, size }) {
  return (
    <div>
      <h1> {person.name} </h1>
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    </div>
  );
}

function Description({ desc }) {
  return (
    <div>
      <div>
        {" "}
        <b> Profession : </b> {desc.profession}{" "}
      </div>
      <div>
        {" "}
        <b> Awards : </b> {desc.awards}{" "}
      </div>
      <div>
        {" "}
        <b> Discovered : </b> {desc.discovered}{" "}
      </div>
    </div>
  );
}
