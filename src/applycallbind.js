let Person = {
    firstName: 'John',
    lastName: 'Doe'
}

let PersonDetailsGenerator = {

    FullDetails: function(city, state){
        return `FullName : ${this.firstName} ${this.lastName}\n Address: ${city} ${state}`;
    }
}


const detailsCall = PersonDetailsGenerator.FullDetails.call(Person, 'Guntur', 'AndhraPradesh');
console.log(detailsCall);

const detailsApply = PersonDetailsGenerator.FullDetails.apply(Person,['Guntur', 'AndhraPradesh']);
console.log(detailsApply);
