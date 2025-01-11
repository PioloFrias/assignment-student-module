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
exports.studentServ = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const student_entity_1 = require("./student.entity");
const typeorm_2 = require("typeorm");
const common_1 = require("@nestjs/common");
let studentServ = class studentServ {
    constructor(studRep) {
        this.studRep = studRep;
    }
    async getAllData() {
        return await this.studRep.find();
    }
    async getOneData(id) {
        const studs = await this.studRep.findOneBy({ id });
        if (!studs) {
            throw new common_1.NotFoundException('Student Not Found');
        }
        return studs;
    }
};
exports.studentServ = studentServ;
exports.studentServ = studentServ = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.students)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], studentServ);
//# sourceMappingURL=student.service.js.map