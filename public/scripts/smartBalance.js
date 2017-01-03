console.log("SmartBalance")

function parseBalances(text) {
    var lines = text.split("\n")
    return lines.map(line => {
        var firstSpace = line.indexOf(' ')
        return {
            amount: line.substring(0, firstSpace),
            name: line.substring(firstSpace + 1)
        }
    })
}

function addBalanceRow(balance) {
    var $row = $(`<div class="form-group smart-balance">
        <div class="col-md-10">
            <input class="form-control smart-balance-comment" required value="${balance.name}" type="text">
        </div>
        <div class="col-md-2">
            <button type="button" class="btn btn-danger btn-block">
                <span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
            </button>
        </div>
    </div>`)

    var $removeButton = $row.find('button')
    $removeButton.on('click', function (ev) {
        $(this).closest('.smart-balance').remove()
    })

    $row.insertBefore($balancesTextarea)
}

var $balancesTextarea = $('#inputComment')
var text = $balancesTextarea.val()
var balances = parseBalances(text)

balances.forEach(balance => {
    addBalanceRow(balance)
})

$balancesTextarea.hide()

var $addButton = $(`<button type="button" class="btn btn-success btn-block">
  <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
</button>`)

$addButton.on('click', function (ev) {
    addBalanceRow({ amount: '', name: '' })
})

$addButton.insertAfter($balancesTextarea)

$('form').on('submit', function (ev) {
    var result = []

    $('.smart-balance').each(function () {
        var $row = $(this)
        var name = $row.find('.smart-balance-comment').val()

        result.push(name)
    })

    $balancesTextarea.val(result.join("\n"))
})