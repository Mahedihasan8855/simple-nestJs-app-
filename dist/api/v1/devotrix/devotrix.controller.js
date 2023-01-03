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
exports.DevotrixController = void 0;
const common_1 = require("@nestjs/common");
const devotrix_service_1 = require("./devotrix.service");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
const devotrix_dto_1 = require("./dto/devotrix.dto");
let DevotrixController = class DevotrixController {
    constructor(service) {
        this.service = service;
    }
    async createWallet(dto) {
        return await this.service.queueCreateWallet(dto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        description: '...',
        summary: 'Create a Known User Wallet contract',
    }),
    (0, common_2.Post)('sum'),
    (0, swagger_1.ApiHeader)({
        name: 'Authorization',
    }),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [devotrix_dto_1.DevotrixDTO]),
    __metadata("design:returntype", Promise)
], DevotrixController.prototype, "createWallet", null);
DevotrixController = __decorate([
    (0, common_1.Controller)('/devotrix'),
    __metadata("design:paramtypes", [devotrix_service_1.DevotrixService])
], DevotrixController);
exports.DevotrixController = DevotrixController;
//# sourceMappingURL=devotrix.controller.js.map