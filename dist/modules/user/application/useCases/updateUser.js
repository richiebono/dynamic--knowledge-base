"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUser = void 0;
const inversify_1 = require("inversify");
const user_1 = require("../../domain/entities/user");
let UpdateUser = class UpdateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(userId, userData) {
        const existingUser = await this.userRepository.findById(userId);
        if (!existingUser) {
            throw new Error('User not found');
        }
        const updatedUser = new user_1.User({
            id: existingUser.id,
            name: userData.name || existingUser.name,
            email: userData.email || existingUser.email,
            role: userData.role ? userData.role : existingUser.role,
            createdAt: existingUser.createdAt,
            updatedAt: new Date()
        });
        await this.userRepository.update(updatedUser);
        return updatedUser;
    }
};
UpdateUser = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)('IUserRepository')),
    __metadata("design:paramtypes", [Object])
], UpdateUser);
exports.UpdateUser = UpdateUser;
