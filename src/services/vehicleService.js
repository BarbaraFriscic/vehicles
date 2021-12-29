const KEYS ={
    vehicles:'vehicles',
    vehicleId:'vehicleID'
}

export const getDepartmentCollection = ()=>([
    { id: '1', title: 'Development'},
    { id: '2', title: 'Marketing'},
    { id: '3', title: 'Accounting'},
    { id: '4', title: 'HR'},
])

export function insertVehicle(data) {
    let vehicles=getAllVehicles();
    data['id'] = generateVehicleId()
    vehicles.push(data)
    localStorage.setItem(KEYS.vehicles,JSON.stringify(vehicles))
}

export function updateVehicle(data) {
    let vehicles= getAllVehicles();
    let recordIndex = vehicles.findIndex(x => x.id == data.id);
    vehicles[recordIndex] = { ...data }
    localStorage.setItem(KEYS.vehicles,JSON.stringify(vehicles))
}

export function generateVehicleId() {
    if (localStorage.getItem(KEYS.vehicleId) == null)
        localStorage.setItem(KEYS.vehicleId, '0')
    var id = parseInt(localStorage.getItem(KEYS.vehicleId))
    localStorage.setItem(KEYS.vehicleId, (++id).toString())
    return id;
}

export function getAllVehicles() {
    if (localStorage.getItem(KEYS.vehicles) == null)
    localStorage.setItem(KEYS.vehicles, JSON.stringify([]))
    let vehicles = JSON.parse(localStorage.getItem(KEYS.vehicles));
    //map departmentID to department title
    let departments = getDepartmentCollection();
    return vehicles.map(x =>({
        ...x,
        department : departments[x.departmentId-1].title
    }))
}