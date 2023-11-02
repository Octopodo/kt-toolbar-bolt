import { evalES }  from '../../lib/utils/bolt'


export function callCommand(command:string, commandName:string="KT Cool Stuff") {
  let newCommand =`
  try{
    function exec() {
      app.beginUndoGroup("${commandName}")
      var comp = KT.Project.getActiveComp();
      if(!_.isComp(comp)) {
        
        return
      };

      var result = ${command}

      app.endUndoGroup();
      return result
    }
    exec();
  } catch (e) {
    alert(e.toSource())
    alert(e.fileName + "\\n" + e.line)
  }
  `

  let result:any;

  return evalES(newCommand, true)
}
