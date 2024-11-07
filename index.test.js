const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const newBand = await Band.create({name:'3 Doors Down', genre: 'Rock'})
        expect(newBand.name).toBe('3 Doors Down');
        expect(newBand.genre).toBe('Rock');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const newMusician = await Musician.create({name:'Squidward', instrument: 'Clarinet'})
        expect(newMusician.name).toBe('Squidward');
        expect(newMusician.instrument).toBe('Clarinet');
    })

    test('can create a song', async () => {
        // TODO - test creating a song
        const newSong = await Song.create({ title:'Chill Bae', year: 2024 , length: 218 })
        expect(newSong.title).toBe('Chill Bae');
        expect(newSong.year).toBe(2024);
        expect(newSong.length).toBe(218);
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        const newBand = await Band.create({name:'3 Doors Down', genre: 'Rock'})
        const updateBand = await newBand.update({ name:'The Beatles', genre: 'Rock'} , { where: { name: '3 Doors Down' }})
        expect(updateBand.name).toBe('The Beatles');
        expect(updateBand.genre).toBe('Rock');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        const newMusician = await Musician.create({name:'Squidward', instrument: 'Clarinet'})
        const updateMusician = await newMusician.update({ name:'Patrick', instrument: 'Trumpet'} , { where: { name: 'Squidward' }})
        expect(updateMusician.name).toBe('Patrick');
        expect(updateMusician.instrument).toBe('Trumpet');
    })

    test('can update a Song', async () => {
        // TODO - test updating a song
        const newSong = await Song.create({ title:'Chill Bae', year: 2024 , length: 218 })
        const updateSong = await newSong.update({ title:'Pick Sides', year: 2024 , length: 214 } , { where: { title: 'Chill Bae' }})
        expect(updateSong.title).toBe('Pick Sides');
        expect(updateSong.year).toBe(2024);
        expect(updateSong.length).toBe(214);

    })

    test('can delete a Band', async () => {
            // TODO - test deleting a band
            const deleteBand = await Band.destroy({ where: { name: 'The Beatles' }})
     })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        const deleteMusician = await Musician.destroy({ where: { name: 'Patrick' }});
    })

    test('can delete a Song', async () => {
        // TODO - test deleting a song
        const deleteSong = await Song.destroy({ where: { title: 'Pick Sides' }});
    })
    
})