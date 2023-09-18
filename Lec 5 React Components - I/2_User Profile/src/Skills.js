export default function Skills() {
  let skillList = ["HTML", "CSS", "JavaScript", "React", "Node"];
  return (
    <ul id="skills">
      {skillList.map((currSkill) => {
        return (
          <li key={currSkill} className="skill">
            {currSkill}
          </li>
        );
      })}
    </ul>
  );
}
