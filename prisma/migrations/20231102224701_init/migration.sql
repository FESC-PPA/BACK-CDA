-- CreateTable
CREATE TABLE `Organization` (
    `organizationId` INTEGER NOT NULL AUTO_INCREMENT,
    `nit` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Organization_organizationId_key`(`organizationId`),
    PRIMARY KEY (`organizationId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `roleId` INTEGER NOT NULL AUTO_INCREMENT,
    `role` VARCHAR(191) NOT NULL,
    `details` VARCHAR(191) NULL,

    UNIQUE INDEX `Role_roleId_key`(`roleId`),
    PRIMARY KEY (`roleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `identify` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `organizationOrganizationId` INTEGER NOT NULL,
    `roleRoleId` INTEGER NOT NULL,

    UNIQUE INDEX `User_userId_key`(`userId`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Auth` (
    `authId` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NULL DEFAULT true,
    `userUserId` INTEGER NOT NULL,

    UNIQUE INDEX `Auth_authId_key`(`authId`),
    PRIMARY KEY (`authId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FacialData` (
    `facialDataId` INTEGER NOT NULL AUTO_INCREMENT,
    `data` VARCHAR(191) NOT NULL,
    `userUserId` INTEGER NOT NULL,

    UNIQUE INDEX `FacialData_facialDataId_key`(`facialDataId`),
    PRIMARY KEY (`facialDataId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Based` (
    `basedId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `perimeterLocations` JSON NOT NULL,
    `organizationOrganizationId` INTEGER NOT NULL,

    UNIQUE INDEX `Based_basedId_key`(`basedId`),
    PRIMARY KEY (`basedId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Schedule` (
    `scheduleId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `basedBasedId` INTEGER NOT NULL,

    UNIQUE INDEX `Schedule_scheduleId_key`(`scheduleId`),
    PRIMARY KEY (`scheduleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserSchedule` (
    `userScheduleId` INTEGER NOT NULL AUTO_INCREMENT,
    `scheduleScheduleId` INTEGER NOT NULL,
    `userUserId` INTEGER NOT NULL,

    UNIQUE INDEX `UserSchedule_userScheduleId_key`(`userScheduleId`),
    PRIMARY KEY (`userScheduleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attendance` (
    `attendanceId` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `late` INTEGER NOT NULL,
    `userScheduleUserScheduleId` INTEGER NOT NULL,

    UNIQUE INDEX `Attendance_attendanceId_key`(`attendanceId`),
    PRIMARY KEY (`attendanceId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WeekDays` (
    `weekDaysId` INTEGER NOT NULL AUTO_INCREMENT,
    `day` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `WeekDays_weekDaysId_key`(`weekDaysId`),
    PRIMARY KEY (`weekDaysId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WorkDays` (
    `workDaysId` INTEGER NOT NULL AUTO_INCREMENT,
    `startTime` DATETIME(3) NOT NULL,
    `endTime` DATETIME(3) NOT NULL,
    `weekDaysWeekDaysId` INTEGER NOT NULL,
    `scheduleScheduleId` INTEGER NOT NULL,

    UNIQUE INDEX `WorkDays_workDaysId_key`(`workDaysId`),
    PRIMARY KEY (`workDaysId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Excuse` (
    `excuseId` INTEGER NOT NULL AUTO_INCREMENT,
    `status` INTEGER NOT NULL DEFAULT 0,
    `resolutionDate` DATETIME(3) NULL,
    `comment` VARCHAR(191) NULL,
    `attendanceAttendanceId` INTEGER NOT NULL,
    `userUserId` INTEGER NOT NULL,

    UNIQUE INDEX `Excuse_excuseId_key`(`excuseId`),
    PRIMARY KEY (`excuseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_organizationOrganizationId_fkey` FOREIGN KEY (`organizationOrganizationId`) REFERENCES `Organization`(`organizationId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_roleRoleId_fkey` FOREIGN KEY (`roleRoleId`) REFERENCES `Role`(`roleId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Auth` ADD CONSTRAINT `Auth_userUserId_fkey` FOREIGN KEY (`userUserId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FacialData` ADD CONSTRAINT `FacialData_userUserId_fkey` FOREIGN KEY (`userUserId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Based` ADD CONSTRAINT `Based_organizationOrganizationId_fkey` FOREIGN KEY (`organizationOrganizationId`) REFERENCES `Organization`(`organizationId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_basedBasedId_fkey` FOREIGN KEY (`basedBasedId`) REFERENCES `Based`(`basedId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserSchedule` ADD CONSTRAINT `UserSchedule_scheduleScheduleId_fkey` FOREIGN KEY (`scheduleScheduleId`) REFERENCES `Schedule`(`scheduleId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserSchedule` ADD CONSTRAINT `UserSchedule_userUserId_fkey` FOREIGN KEY (`userUserId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_userScheduleUserScheduleId_fkey` FOREIGN KEY (`userScheduleUserScheduleId`) REFERENCES `UserSchedule`(`userScheduleId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkDays` ADD CONSTRAINT `WorkDays_weekDaysWeekDaysId_fkey` FOREIGN KEY (`weekDaysWeekDaysId`) REFERENCES `WeekDays`(`weekDaysId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkDays` ADD CONSTRAINT `WorkDays_scheduleScheduleId_fkey` FOREIGN KEY (`scheduleScheduleId`) REFERENCES `Schedule`(`scheduleId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Excuse` ADD CONSTRAINT `Excuse_attendanceAttendanceId_fkey` FOREIGN KEY (`attendanceAttendanceId`) REFERENCES `Attendance`(`attendanceId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Excuse` ADD CONSTRAINT `Excuse_userUserId_fkey` FOREIGN KEY (`userUserId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;
