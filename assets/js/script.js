function generateHourBlock()
{
    $iBlock = $("<div>").addClass("row py-1");

    $iTime = $("<div>").addClass("col-2 py-3 bg-warning").text("hello");
    
    $iText = $("<div>").addClass("col-8 py-3 bg-secondary").text("hello");

    $iLock = $("<div>").addClass("col-2 py-3 bg-warning").text("hello");

    $iBlock.append($iTime, $iText, $iLock);

    $("#planner").append($iBlock);
}

generateHourBlock();
generateHourBlock();
generateHourBlock();
generateHourBlock();
