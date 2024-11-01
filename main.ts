class ClubRange{
    Driver: number;
    FW3:    number;
    FW5:    number;
    Hybrid: number;
    Iron2:  number;
    Iron3:  number;
    Iron4:  number;
    Iron5:  number;
    Iron6:  number;
    Iron7:  number;
    Iron8:  number;
    Iron9:  number;
    PitchingWedge: number;
    
    //readonly version:string = "1.0.1"

    constructor(    Driver: number = 0,
                    FW3: number = 0,
                    FW5: number = 0,
                    Hybrid: number = 0,
                    Iron2: number = 0,
                    Iron3: number = 0,
                    Iron4: number = 0,
                    Iron5: number = 0,
                    Iron6: number = 0,
                    Iron7: number = 0,
                    Iron8: number = 0,
                    Iron9: number = 0,
                    PitchingWedge: number = 0 ) {
                        this.Driver = Driver;
                        this.FW3 = FW3;
                        this.FW5 = FW5;
                        this.Hybrid = Hybrid;
                        this.Iron2 = Iron2;
                        this.Iron3 = Iron3;
                        this.Iron4 = Iron4;
                        this.Iron5 = Iron5;
                        this.Iron6 = Iron6;
                        this.Iron7 = Iron7;
                        this.Iron8 = Iron8;
                        this.Iron9 = Iron9;
                        this.PitchingWedge = PitchingWedge;
                    }

    changeValue() {
        const valueElements = [
            { id: 'Driver', value: this.Driver },
            { id: 'FW3', value: this.FW3 },
            { id: 'FW5', value: this.FW5 },
            { id: 'Hybrid', value: this.Hybrid },
            { id: 'Iron2', value: this.Iron2 },
            { id: 'Iron3', value: this.Iron3 },
            { id: 'Iron4', value: this.Iron4 },
            { id: 'Iron5', value: this.Iron5 },
            { id: 'Iron6', value: this.Iron6 },
            { id: 'Iron7', value: this.Iron7 },
            { id: 'Iron8', value: this.Iron8 },
            { id: 'Iron9', value: this.Iron9 },
            { id: 'PW', value: this.PitchingWedge }
        ];

        valueElements.forEach(({ id, value }) => {
            const element = document.getElementById(id) as HTMLTableCellElement;
            if (element) {
                element.textContent = value.toString();
            }
        });
    }

}

function enableGolfClub(): void {
    const clubspeedSelect = document.getElementById('clubspeed') as HTMLSelectElement;
    const golfclubSelect = document.getElementById('golfclub') as HTMLSelectElement;

    if (clubspeedSelect.value !== "0") {
        golfclubSelect.disabled = false;
    } else {
        golfclubSelect.disabled = true;
    }
}


function resetSelect(): void {
    const clubspeedSelect = document.getElementById('clubspeed') as HTMLSelectElement;
    const golfclubSelect = document.getElementById('golfclub') as HTMLSelectElement;

    const tableClubSpeed = document.getElementById("TableClubSpeed") as HTMLElement;

    console.log(clubspeedSelect, golfclubSelect);

    if (clubspeedSelect) {
        clubspeedSelect.value = '0'; // Reset the dropdown to the first option
    }
    if (golfclubSelect ) {
        golfclubSelect.value = '0'; // Reset the dropdown to the first option
    }

    if (tableClubSpeed) {
        tableClubSpeed.style.display = "none";
    }

    const outputElement = document.querySelector('.output') as HTMLElement;
    if (outputElement) {
    outputElement.textContent = "";
}
    
}


function showTable(myRange: number[]) {

    const clubRangeTable = new ClubRange(...myRange);
    clubRangeTable.changeValue();

    console.log(clubRangeTable);
   
}

function myFunction(): string | void {
    const selectClubspeed = (<HTMLInputElement>document.getElementById('clubspeed')).value;
    const selectGolfclub = (<HTMLInputElement>document.getElementById('golfclub')).value;

    const tableClubSpeed = document.getElementById("TableClubSpeed") as HTMLElement;

    if (selectClubspeed === "0" || selectGolfclub === "0") {
        alert("Please select your Clubspeed and Golfclub!");
        console.error("Please select your Clubspeed and Golfclub!");
        return; 
    } else {
        const dataSelect: [string, string] = [selectClubspeed, selectGolfclub];

        let myRange: number[];

        //Select Index in myRange Array
        const index = (parseInt(dataSelect[1], 10) - 1);

        if (selectClubspeed === "60") {
            myRange = [146, 130, 125, 120, 118, 115, 110, 105, 100, 95, 85, 80, 73];
        } 
        else if (selectClubspeed === "70") {
            myRange = [170, 150, 145, 140, 135, 130, 126, 120, 115, 105, 100, 90, 85];
        } 
        else if (selectClubspeed === "80") {
            myRange = [195, 175, 165, 160, 155, 150, 145, 138, 130, 120, 115, 105, 100];
        } 
        else if (selectClubspeed === "90") {
            myRange = [219, 195, 185, 180, 176, 172, 165, 155, 145, 135, 130, 120, 110];
        }
        else if (selectClubspeed === "100") {
            myRange = [243, 215, 205, 200, 194, 188, 180, 170, 165, 155, 145, 130, 120];
        }
        else if (selectClubspeed === "110") {
            myRange = [268, 238, 225, 220, 213, 207, 190, 185, 175, 165, 155, 145, 135];
        }
        else if (selectClubspeed === "120") {
            myRange = [292, 259, 245, 240, 233, 226, 208, 198, 185, 175, 165, 160, 145];
        }
        else if (selectClubspeed === "130") {
            myRange = [316, 283, 265, 260, 252, 245, 226, 215, 195, 185, 175, 175, 156];
        } 
        else if (selectClubspeed === "140") {
            myRange = [340, 303, 285, 280, 271, 265, 245, 228, 208, 195, 190, 186, 167];
        } 
        else if (selectClubspeed === "150") {
            myRange = [365, 318, 305, 300, 292, 284, 264, 247, 219, 210, 202, 197, 179];
        } 
        else {
            console.error("Invalid Clubspeed selected.");
            return; 
        }
     
        if (index >= 0 && index < myRange.length) {
            const output = myRange[index];
            const outputElement = document.querySelector('.output') as HTMLElement;
            if (outputElement) {
                outputElement.textContent = output + " Yards";
            }
            if (tableClubSpeed) {
                tableClubSpeed.style.display = "block";
            }
            showTable(myRange);
            return output + " Yards"; 
        } else {
            console.error("Golfclub index out of range.");
        }
    }
}
