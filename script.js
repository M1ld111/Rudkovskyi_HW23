const table = document.createElement("table");
let number = 1;
for (let tr = 0; tr < 10; tr++) {
    const row = document.createElement("tr");

    for (let td = 0; td < 10; td++) {
        const col = document.createElement("td");
        col.textContent = number;
        row.append(col);
        number++;
    }
    table.append(row);
    document.body.append(table);
}