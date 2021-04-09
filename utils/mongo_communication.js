import surflyProxy from "./surflyLibary";

 const Auslagerung = {
 	test:  (tester) => {
 		console.log('Auslagerung erfolgreich')
 		tester();
 		surflyProxy.surflyTest()

 	}
}

export default Auslagerung

