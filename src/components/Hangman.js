export default function Hangman({lives}) {
  return (
    <svg width={200} height={300} viewBox="0 0 200 400" shapeRendering="geometricPrecision" >
      <line x1="-2.045338" y1="-158.172831" x2="2.045339" y2="158.172831" transform="translate(27.096642 205.796489)" fill="none" stroke="#3f5787" strokeWidth="4"/>
      <line x1="-148.769022" y1="0" x2="148.769022" y2="0" transform="matrix(.639517 0 0-1 98.988383 363.96932)" fill="none" stroke="#3f5787" strokeWidth="4"/>
      <line x1="-51.474348" y1="0" x2="51.474348" y2="0" transform="translate(76.525652 47.623658)" fill="none" stroke="#3f5787" strokeWidth="4"/>
      <line x1="0" y1="-15.261763" x2="0" y2="15.261764" transform="translate(128 62.885422)" fill="none" stroke="#3f5787" strokeWidth="4"/>
      {/* head */}
      {(lives.length <= 6) ? <ellipse rx="36.657115" ry="36.657115" transform="translate(127.818199 114.804301)" fill="none" stroke="#3f5787" strokeWidth="4"/> : null}
      {/* neck */}
      {(lives.length <= 5) ? <line x1="0" y1="-20.067763" x2="0" y2="10.067763" transform="translate(128 171.529179)" fill="none" stroke="#3f5787" strokeWidth="4"/>: null}
      {/* arms */}
      {(lives.length <= 4) ? <line x1="25.737175" y1="-21.405615" x2="-25.737175" y2="21.405615" transform="translate(102.262827 202.002557)" fill="none" stroke="#3f5787" strokeWidth="4"/> : null}
      {(lives.length <= 3) ? <line x1="-26.623233" y1="-21.405615" x2="26.623233" y2="21.405615" transform="translate(154.441432 202.002557)" fill="none" stroke="#3f5787" strokeWidth="4"/> : null}
      {/* backbone */}
      {(lives.length <= 2) ? <line x1="0" y1="-42.811229" x2="0" y2="42.81123" transform="translate(127.818199 223.408172)" fill="none" stroke="#3f5787" strokeWidth="4"/> : null}
      {/* legs */}
      {(lives.length <= 1) ? <line x1="25.646274" y1="-26.532332" x2="-25.646274" y2="26.532332" transform="translate(102.171926 292.751735)" fill="none" stroke="#3f5787" strokeWidth="4"/> : null}
      {(lives.length <= 0) ? <line x1="-26.532332" y1="-26.532332" x2="26.532332" y2="26.532332" transform="translate(154.532333 292.751735)" fill="none" stroke="#3f5787" strokeWidth="4"/> : null}
    </svg>
  );
}
