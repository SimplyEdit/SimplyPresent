async function() {
  let resources = await simplyHHS.init()
  let ds = new simplyHHS.DocumentSpace()
  let space = HHS.Space.fromEntryPoint(ds, resources)
  await space.entryPoint
  editor.pageData.hhsWords = await space.getWordCoding()
  editor.pageData.hhsCreator = editor.pageData.hhsWords
  ds = await space.getEntryPoint()
  ds.setResources(resources)
  ds.startSync()
  // await this.app.actions.hhsConnectSpace(editor.pageData.hhsWords)
  simplyApp.actions.hhsAddSlideChangeListener()
  ds.setValue(JSON.stringify({slide:editor.pageData.slide}))
  simplyHHS.ds = ds
  console.log(document.location.origin + document.location.pathname + "#words/" + editor.pageData.hhsWords.join("/"))
  return editor.pageData.hhsWords
}