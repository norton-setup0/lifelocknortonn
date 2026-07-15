document.addEventListener("DOMContentLoaded", function () {

    // Floating Button
    const button = document.createElement("div");
    button.id = "help-button";
    button.innerHTML = "💬";

    // Chat Box
    const box = document.createElement("div");
    box.id = "help-box";

    box.innerHTML = `
        <div id="help-header">
            Documentation Help
            <span id="close-help">&times;</span>
        </div>

        <div id="help-body">
            <p><strong>Welcome!</strong></p>

            <p>How can we help you today?</p>

            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="search.html">Search Documentation</a></li>
                <li><a href="genindex.html">Documentation Index</a></li>
            </ul>

            <p>If you can't find the answer, contact the product support team.</p>
        </div>
    `;

    document.body.appendChild(button);
    document.body.appendChild(box);

    button.onclick = function () {
        box.style.display = "block";
        button.style.display = "none";
    };

    document.getElementById("close-help").onclick = function () {
        box.style.display = "none";
        button.style.display = "flex";
    };

});
