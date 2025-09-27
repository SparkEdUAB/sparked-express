import { Unit } from '../models/Unit';
import { IUnit } from '../types';
import { processCodes } from '../utils/processCodes';

export const createUnit = async (unitData: IUnit) => {
    try {
        const newUnit = new Unit(unitData);
        await newUnit.save();
        return { success: true, data: newUnit };
    } catch (error) {
        return { success: false, message: error.message, code: processCodes.INTERNAL_SERVER_ERROR };
    }
};

export const getUnits = async () => {
    try {
        const units = await Unit.find();
        return { success: true, data: units };
    } catch (error) {
        return { success: false, message: error.message, code: processCodes.INTERNAL_SERVER_ERROR };
    }
};

export const getUnitById = async (id: string) => {
    try {
        const unit = await Unit.findById(id);
        if (!unit) {
            return { success: false, message: 'Unit not found', code: processCodes.NOT_FOUND };
        }
        return { success: true, data: unit };
    } catch (error) {
        return { success: false, message: error.message, code: processCodes.INTERNAL_SERVER_ERROR };
    }
};

export const updateUnit = async (id: string, unitData: Partial<IUnit>) => {
    try {
        const updatedUnit = await Unit.findByIdAndUpdate(id, unitData, { new: true });
        if (!updatedUnit) {
            return { success: false, message: 'Unit not found', code: processCodes.NOT_FOUND };
        }
        return { success: true, data: updatedUnit };
    } catch (error) {
        return { success: false, message: error.message, code: processCodes.INTERNAL_SERVER_ERROR };
    }
};

export const deleteUnit = async (id: string) => {
    try {
        const deletedUnit = await Unit.findByIdAndDelete(id);
        if (!deletedUnit) {
            return { success: false, message: 'Unit not found', code: processCodes.NOT_FOUND };
        }
        return { success: true, message: 'Unit deleted successfully' };
    } catch (error) {
        return { success: false, message: error.message, code: processCodes.INTERNAL_SERVER_ERROR };
    }
};