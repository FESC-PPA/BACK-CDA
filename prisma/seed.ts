import { PrismaClient, Prisma} from '@prisma/client'
const db = new PrismaClient()

async function main() {
    const weekDaysData= [
        { weekDaysId: 1, day: 'lunes' },
        { weekDaysId: 2, day: 'martes' },
        { weekDaysId: 3, day: 'miércoles' },
        { weekDaysId: 4, day: 'jueves' },
        { weekDaysId: 5, day: 'viernes' },
        { weekDaysId: 6, day: 'sábado' },
        { weekDaysId: 7, day: 'domingo' }
    ]

    for (const data of weekDaysData) {
        await db.weekDays.upsert({
            where: { weekDaysId: data.weekDaysId },
            update: {},
            create: data,
        })
    }

    const roleData = [
        { roleId: 1, role: 'administrador',  details:""},
        { roleId: 2, role: 'supervisor', details:""},
        { roleId: 3, role: 'empleado', details:""},
    ]

    for (const data of roleData) {
        await db.role.upsert({
            where: { roleId: data.roleId },
            update: {},
            create: data,
        })
    }

}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await db.$disconnect()
    })