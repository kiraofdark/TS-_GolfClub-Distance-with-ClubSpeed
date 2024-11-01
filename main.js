var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ClubRange = /** @class */ (function () {
    //readonly version:string = "1.0.1"
    function ClubRange(Driver, FW3, FW5, Hybrid, Iron2, Iron3, Iron4, Iron5, Iron6, Iron7, Iron8, Iron9, PitchingWedge) {
        if (Driver === void 0) { Driver = 0; }
        if (FW3 === void 0) { FW3 = 0; }
        if (FW5 === void 0) { FW5 = 0; }
        if (Hybrid === void 0) { Hybrid = 0; }
        if (Iron2 === void 0) { Iron2 = 0; }
        if (Iron3 === void 0) { Iron3 = 0; }
        if (Iron4 === void 0) { Iron4 = 0; }
        if (Iron5 === void 0) { Iron5 = 0; }
        if (Iron6 === void 0) { Iron6 = 0; }
        if (Iron7 === void 0) { Iron7 = 0; }
        if (Iron8 === void 0) { Iron8 = 0; }
        if (Iron9 === void 0) { Iron9 = 0; }
        if (PitchingWedge === void 0) { PitchingWedge = 0; }
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
    ClubRange.prototype.changeValue = function () {
        var valueElements = [
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
        valueElements.forEach(function (_a) {
            var id = _a.id, value = _a.value;
            var element = document.getElementById(id);
            if (element) {
                element.textContent = value.toString();
            }
        });
    };
    return ClubRange;
}());
function enableGolfClub() {
    var clubspeedSelect = document.getElementById('clubspeed');
    var golfclubSelect = document.getElementById('golfclub');
    if (clubspeedSelect.value !== "0") {
        golfclubSelect.disabled = false;
    }
    else {
        golfclubSelect.disabled = true;
    }
}
function resetSelect() {
    var clubspeedSelect = document.getElementById('clubspeed');
    var golfclubSelect = document.getElementById('golfclub');
    var tableClubSpeed = document.getElementById("TableClubSpeed");
    console.log(clubspeedSelect, golfclubSelect);
    if (clubspeedSelect) {
        clubspeedSelect.value = '0'; // Reset the dropdown to the first option
    }
    if (golfclubSelect) {
        golfclubSelect.value = '0'; // Reset the dropdown to the first option
    }
    if (tableClubSpeed) {
        tableClubSpeed.style.display = "none";
    }
    var outputElement = document.querySelector('.output');
    if (outputElement) {
        outputElement.textContent = "";
    }
}
function showTable(myRange) {
    var clubRangeTable = new (ClubRange.bind.apply(ClubRange, __spreadArray([void 0], myRange, false)))();
    clubRangeTable.changeValue();
    console.log(clubRangeTable);
}
function myFunction() {
    var selectClubspeed = document.getElementById('clubspeed').value;
    var selectGolfclub = document.getElementById('golfclub').value;
    var tableClubSpeed = document.getElementById("TableClubSpeed");
    if (selectClubspeed === "0" || selectGolfclub === "0") {
        alert("Please select your Clubspeed and Golfclub!");
        console.error("Please select your Clubspeed and Golfclub!");
        return;
    }
    else {
        var dataSelect = [selectClubspeed, selectGolfclub];
        var myRange = void 0;
        //Select Index in myRange Array
        var index = (parseInt(dataSelect[1], 10) - 1);
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
            var output = myRange[index];
            var outputElement = document.querySelector('.output');
            if (outputElement) {
                outputElement.textContent = output + " Yards";
            }
            if (tableClubSpeed) {
                tableClubSpeed.style.display = "block";
            }
            showTable(myRange);
            return output + " Yards";
        }
        else {
            console.error("Golfclub index out of range.");
        }
    }
}
