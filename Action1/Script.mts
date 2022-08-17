'check the 5 places in Cundinamarca and store the time that it takes to thale's office
browserExe = DataTable.Value ("browser")
Set BrowserTest = Browser("Google Maps")
SystemUtil.Run browserExe, "https://www.google.com.co/maps/"
placeStr = DataTable.Value("places","Storing route")
 @@ script infofile_;_ZIP::ssf12.xml_;_

BrowserTest.Page("Google Maps").WebEdit("Buscar en Google Maps").Set "thales colombia" @@ script infofile_;_ZIP::ssf4.xml_;_
BrowserTest.Page("Google Maps").WebButton("Buscar").Click @@ script infofile_;_ZIP::ssf16.xml_;_

 @@ script infofile_;_ZIP::ssf18.xml_;_
BrowserTest.Page("Thales International Suc.").WebElement("Cra. 12 #93-8, Bogotá").Check CheckPoint("Cra. 12 #93-8, Bogotá") @@ script infofile_;_ZIP::ssf20.xml_;_
BrowserTest.Page("Thales International Suc.").WebElement("thalesgroup.com").Check CheckPoint("thalesgroup.com") @@ script infofile_;_ZIP::ssf21.xml_;_
BrowserTest.Page("Thales International Suc.").WebElement("17442442").Check CheckPoint("17442442") @@ script infofile_;_ZIP::ssf22.xml_;_

BrowserTest.Page("Thales International Suc._2").Image("Indicaciones").Click @@ script infofile_;_ZIP::ssf6.xml_;_
BrowserTest.Page("Google Maps_2").WebEdit("Punto de partida").Set placeStr @@ script infofile_;_ZIP::ssf7.xml_;_
BrowserTest.Page("Google Maps_2").WebButton("Buscar").Click @@ script infofile_;_ZIP::ssf8.xml_;_
BrowserTest.Page("Direction bar").Link("first direction").Click



travelTimeElement = BrowserTest.Page("starting point").WebElement("time").Object.innerText
a=Split(travelTimeElement)
traveltime = CInt(a(0))
print traveltime
DataTable.Value("duration","Storing route") = travelTime
DataTable.Value("Tmax") = travelTime
DataTable.Value("placeMax") = placeStr

Desktop.CaptureBitmap "screenshot.bmp", true
Reporter.ReportEvent micPass, "Paso Final", "test completed" , "screenshot.bmp"

SystemUtil.CloseProcessByName browserExe
wait 1


